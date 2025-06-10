const db = require("../config/db");

// Book a workshop ticket
exports.bookWorkshop = async (req, res) => {
  try {
    const {
      workshop_id,
      quantity,
      first_name,
      last_name,
      email,
      phone_number,
    } = req.body;
    const userId = req.user.id;

    if (
      !workshop_id ||
      !quantity ||
      !first_name ||
      !last_name ||
      !email ||
      !phone_number
    ) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    const [workshop] = await db.query(
      "SELECT * FROM workshops WHERE id = ? AND status = 'upcoming'",
      [workshop_id]
    );
    if (!workshop.length) {
      return res
        .status(404)
        .json({ message: "Workshop not found or not available" });
    }

    const workshopData = workshop[0];
    if (
      workshopData.max_participants - workshopData.current_participants <
      quantity
    ) {
      return res.status(400).json({ message: "Not enough available seats" });
    }

    const totalAmount = workshopData.price * quantity;
    const accountNumber = "1234-5678-9012-3456"; // Nomor rekening statis untuk contoh

    // Insert booking
    const [bookingResult] = await db.query(
      `INSERT INTO bookings (workshop_id, user_id, booking_date, status)
       VALUES (?, ?, NOW(), 'pending')`,
      [workshop_id, userId]
    );

    // Insert payment
    const [paymentResult] = await db.query(
      `INSERT INTO payments (booking_id, user_id, amount, account_number, status)
       VALUES (?, ?, ?, ?, 'pending')`,
      [bookingResult.insertId, userId, totalAmount, accountNumber]
    );

    // Update current_participants
    await db.query(
      `UPDATE workshops SET current_participants = current_participants + ? WHERE id = ?`,
      [quantity, workshop_id]
    );

    const [booking] = await db.query(
      `SELECT b.*, w.title, w.price, p.amount, p.account_number
       FROM bookings b
       LEFT JOIN workshops w ON b.workshop_id = w.id
       LEFT JOIN payments p ON b.id = p.booking_id
       WHERE b.id = ?`,
      [bookingResult.insertId]
    );

    res.status(201).json({
      ...booking[0],
      message: `Please transfer Rp ${totalAmount} to account ${accountNumber}. Payment status will be updated by admin.`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error booking workshop" });
  }
};

// Confirm payment by admin
exports.confirmPayment = async (req, res) => {
  try {
    const { payment_id } = req.params;
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Only admin can confirm payments" });
    }

    const [result] = await db.query(
      `UPDATE payments SET status = 'confirmed', payment_date = NOW() WHERE id = ? AND status = 'pending'`,
      [payment_id]
    );

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Payment not found or already processed" });
    }

    const [payment] = await db.query(
      `SELECT p.*, b.workshop_id, u.username as buyer
       FROM payments p
       LEFT JOIN bookings b ON p.booking_id = b.id
       LEFT JOIN users u ON p.user_id = u.id
       WHERE p.id = ?`,
      [payment_id]
    );

    await db.query(`UPDATE bookings SET status = 'confirmed' WHERE id = ?`, [
      payment[0].booking_id,
    ]);

    res.json({
      message: "Payment confirmed successfully",
      payment: payment[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error confirming payment" });
  }
};

// Reject payment by admin
exports.rejectPayment = async (req, res) => {
  try {
    const { payment_id } = req.params;
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Only admin can reject payments" });
    }

    const [payment] = await db.query(
      `SELECT p.*, b.workshop_id, b.user_id
       FROM payments p
       LEFT JOIN bookings b ON p.booking_id = b.id
       WHERE p.id = ? AND p.status = 'pending'`,
      [payment_id]
    );

    if (!payment.length) {
      return res
        .status(404)
        .json({ message: "Payment not found or already processed" });
    }

    const [result] = await db.query(
      `UPDATE payments SET status = 'rejected' WHERE id = ?`,
      [payment_id]
    );

    // Refund logic: Decrease current_participants
    await db.query(
      `UPDATE workshops w
       JOIN bookings b ON w.id = b.workshop_id
       SET w.current_participants = w.current_participants - 1
       WHERE b.id = ?`,
      [payment[0].booking_id]
    );

    await db.query(`DELETE FROM bookings WHERE id = ?`, [
      payment[0].booking_id,
    ]);

    res.json({ message: "Payment rejected successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error rejecting payment" });
  }
};

// Get all order requests for admin
exports.getOrderRequests = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Only admin can view order requests" });
    }

    const [rows] = await db.query(`
      SELECT p.id, w.title as workshop_name, c.name as category, p.amount as price,
             u.username as buyer, p.payment_date as date, p.status,
             b.workshop_id
      FROM payments p
      LEFT JOIN bookings b ON p.booking_id = b.id
      LEFT JOIN workshops w ON b.workshop_id = w.id
      LEFT JOIN categories c ON w.category_id = c.id
      LEFT JOIN users u ON p.user_id = u.id
      WHERE p.status = 'pending'
      ORDER BY p.payment_date DESC
    `);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching order requests" });
  }
};

// backend/controllers/adminController.js
const db = require("../config/db");

// Get Admin Dashboard Statistics (for Analytics & Statistics view)
exports.getAdminDashboardStats = async (req, res) => {
  try {
    // Total Users
    const [totalUsers] = await db.query("SELECT COUNT(id) as count FROM users WHERE role = 'user'"); // cite: 1
    // Total Organizers (users with role 'organizer')
    const [totalOrganizers] = await db.query("SELECT COUNT(id) as count FROM users WHERE role = 'organizer'"); // cite: 1
    // Total Workshops
    const [totalWorkshops] = await db.query("SELECT COUNT(id) as count FROM workshops"); // cite: 1
    // Pending Workshop Submissions
    const [pendingSubmissions] = await db.query("SELECT COUNT(id) as count FROM workshop_submissions WHERE status = 'pending'"); // cite: 1
    // Total Bookings
    const [totalBookings] = await db.query("SELECT COUNT(id) as count FROM bookings"); // cite: 1
    // Pending Refunds
    const [pendingRefunds] = await db.query("SELECT COUNT(id) as count FROM refund_requests WHERE status = 'pending'"); // cite: 1
    // Total Revenue (sum of paid bookings)
    const [totalRevenue] = await db.query(
      "SELECT SUM(w.price) as revenue FROM bookings b JOIN workshops w ON b.workshop_id = w.id WHERE b.payment_status = 'paid'"
    ); // cite: 1

    res.json({
      totalUsers: totalUsers[0].count,
      totalOrganizers: totalOrganizers[0].count,
      totalWorkshops: totalWorkshops[0].count,
      pendingSubmissions: pendingSubmissions[0].count,
      totalBookings: totalBookings[0].count,
      pendingRefunds: pendingRefunds[0].count,
      totalRevenue: totalRevenue[0].revenue || 0,
      // You can add more detailed stats here, e.g., weekly trends, workshop categories distribution
    });
  } catch (err) {
    console.error("Error fetching admin dashboard stats:", err); // cite: 1
    res.status(500).json({ message: "Error fetching dashboard statistics" }); // cite: 1
  }
};

// Get Admin Account Settings (for Account Settings view)
exports.getAdminAccountSettings = async (req, res) => {
  const adminId = req.params.id; // Assuming admin ID comes from URL param or authenticated user

  try {
    const [rows] = await db.query("SELECT id, username, first_name, last_name, email, phone_number FROM users WHERE id = ? AND role = 'admin'", [adminId]); // cite: 1

    if (rows.length === 0) {
      return res.status(404).json({ message: "Admin not found" }); // cite: 1
    }

    res.json(rows[0]); // cite: 1
  } catch (err) {
    console.error("Error fetching admin account settings:", err); // cite: 1
    res.status(500).json({ message: "Error fetching admin account settings" }); // cite: 1
  }
};

// Update Admin Account Settings (for Account Settings view)
exports.updateAdminAccountSettings = async (req, res) => {
  const adminId = req.params.id;
  const { username, first_name, last_name, email, phone_number } = req.body; // cite: 1

  try {
    const [result] = await db.query(
      "UPDATE users SET username = ?, first_name = ?, last_name = ?, email = ?, phone_number = ? WHERE id = ? AND role = 'admin'", // cite: 1
      [username, first_name, last_name, email, phone_number, adminId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Admin not found or no changes made" }); // cite: 1
    }

    res.json({ message: "Admin account settings updated successfully" }); // cite: 1
  } catch (err) {
    console.error("Error updating admin account settings:", err); // cite: 1
    res.status(500).json({ message: "Error updating admin account settings" }); // cite: 1
  }
};
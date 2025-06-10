const db = require("../config/db");

// Get all workshops for admin (approved/upcoming/ongoing)
exports.getWorkshops = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT w.id, w.title as topic, c.name as category, w.price,
             w.max_participants as quantity, w.status,
             u.username as host
      FROM workshops w
      LEFT JOIN categories c ON w.category_id = c.id
      LEFT JOIN users u ON w.instructor_id = u.id
      WHERE w.status IN ('upcoming', 'ongoing')
      ORDER BY w.date ASC
    `);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching workshops" });
  }
};

// Get all workshop submissions for admin (pending approval)
exports.getWorkshopSubmissions = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT ws.id as submission_id, w.title as topic, c.name as category, w.price,
             w.max_participants as quantity, ws.status,
             u.username as host, w.date
      FROM workshop_submissions ws
      LEFT JOIN workshops w ON ws.workshop_id = w.id
      LEFT JOIN categories c ON w.category_id = c.id
      LEFT JOIN users u ON ws.submitter_user_id = u.id
      WHERE ws.status = 'pending'
      ORDER BY ws.submission_date DESC
    `);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching workshop submissions" });
  }
};

// Get single workshop (for admin to view/edit)
exports.getWorkshop = async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT w.*, c.name as category, u.username as host
       FROM workshops w
       LEFT JOIN categories c ON w.category_id = c.id
       LEFT JOIN users u ON w.instructor_id = u.id
       WHERE w.id = ?`,
      [req.params.id]
    );

    if (!rows.length) {
      return res.status(404).json({ message: "Workshop not found" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching workshop" });
  }
};

// Create workshop submission (by user)
exports.createWorkshopSubmission = async (req, res) => {
  try {
    const {
      title,
      description,
      category_id,
      instructor_id,
      price,
      location,
      date,
      time,
      max_participants,
      image_url,
    } = req.body;
    const userId = req.user.id;

    if (
      !title ||
      !description ||
      !category_id ||
      !instructor_id ||
      !location ||
      !date ||
      !time
    ) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    // Check if category_id and instructor_id exist
    const [category] = await db.query(
      "SELECT id FROM categories WHERE id = ?",
      [category_id]
    );
    if (!category.length) {
      return res.status(400).json({ message: "Invalid category_id" });
    }
    const [instructor] = await db.query("SELECT id FROM users WHERE id = ?", [
      instructor_id,
    ]);
    if (!instructor.length) {
      return res.status(400).json({ message: "Invalid instructor_id" });
    }

    // Insert into workshops as draft
    const [workshopResult] = await db.query(
      `INSERT INTO workshops
       (title, description, category_id, instructor_id, price, location, date, time,
        max_participants, image_url, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'draft')`,
      [
        title,
        description,
        category_id,
        instructor_id,
        price || 0,
        location,
        date,
        time,
        max_participants || 0,
        image_url || null,
      ]
    );

    // Insert into workshop_submissions
    const [submissionResult] = await db.query(
      `INSERT INTO workshop_submissions (workshop_id, submitter_user_id)
       VALUES (?, ?)`,
      [workshopResult.insertId, userId]
    );

    const [newSubmission] = await db.query(
      `SELECT ws.*, w.*
       FROM workshop_submissions ws
       LEFT JOIN workshops w ON ws.workshop_id = w.id
       WHERE ws.id = ?`,
      [submissionResult.insertId]
    );

    res.status(201).json(newSubmission[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating workshop submission" });
  }
};

// Update workshop (admin only)
exports.updateWorkshop = async (req, res) => {
  try {
    const {
      title,
      description,
      category_id,
      price,
      location,
      date,
      time,
      max_participants,
      image_url,
      status,
    } = req.body;

    if (!req.params.id) {
      return res.status(400).json({ message: "Workshop ID is required" });
    }

    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Only admin can update workshops" });
    }

    const [result] = await db.query(
      `UPDATE workshops
       SET title = ?, description = ?, category_id = ?,
           price = ?, location = ?, date = ?, time = ?,
           max_participants = ?, image_url = ?, status = ?,
           updated_at = NOW()
       WHERE id = ?`,
      [
        title,
        description,
        category_id,
        price,
        location,
        date,
        time,
        max_participants,
        image_url,
        status || "upcoming",
        req.params.id,
      ]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Workshop not found" });
    }

    const [updatedWorkshop] = await db.query(
      "SELECT * FROM workshops WHERE id = ?",
      [req.params.id]
    );
    res.json(updatedWorkshop[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating workshop" });
  }
};

// Delete workshop (admin only)
exports.deleteWorkshop = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Only admin can delete workshops" });
    }

    const [result] = await db.query("DELETE FROM workshops WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Workshop not found" });
    }

    res.json({ message: "Workshop deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting workshop" });
  }
};

// Process workshop submission (approve/reject by admin)
exports.processWorkshopSubmission = async (req, res) => {
  try {
    const { status, admin_notes } = req.body;
    if (!["approved", "rejected"].includes(status)) {
      return res
        .status(400)
        .json({ message: "Status must be 'approved' or 'rejected'" });
    }

    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Only admin can process workshop submissions" });
    }

    const [submission] = await db.query(
      "SELECT * FROM workshop_submissions WHERE id = ?",
      [req.params.id]
    );

    if (!submission.length) {
      return res.status(404).json({ message: "Workshop submission not found" });
    }

    const workshopId = submission[0].workshop_id;

    if (status === "approved") {
      await db.query("UPDATE workshops SET status = 'upcoming' WHERE id = ?", [
        workshopId,
      ]);
    } else {
      await db.query("UPDATE workshops SET status = 'cancelled' WHERE id = ?", [
        workshopId,
      ]);
    }

    const [result] = await db.query(
      `UPDATE workshop_submissions
       SET status = ?, admin_notes = ?, processed_by_admin_id = ?, processed_date = NOW()
       WHERE id = ?`,
      [status, admin_notes || null, req.user.id, req.params.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Workshop submission not found" });
    }

    res.json({ message: `Workshop submission ${status} successfully` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error processing workshop submission" });
  }
};

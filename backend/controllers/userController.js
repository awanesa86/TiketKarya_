// backend/controllers/userController.js
const db = require("../config/db");
const bcrypt = require("bcryptjs");

// Update User Profile
exports.updateUserProfile = async (req, res) => {
  const userId = req.user.id;
  const { firstName, lastName, username, about, phone, country, language } =
    req.body;
  const profileImage = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const [existingUser] = await db.query(
      "SELECT id FROM users WHERE id = ? AND role IN ('user', 'organizer')",
      [userId]
    );

    if (existingUser.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    await db.query(
      "UPDATE users SET first_name = ?, last_name = ?, username = ?, about = ?, phone = ?, country = ?, language = ?, profile_image = ? WHERE id = ?",
      [
        firstName,
        lastName,
        username,
        about,
        phone,
        country,
        language,
        profileImage,
        userId,
      ]
    );

    const [updatedUser] = await db.query(
      "SELECT id, first_name AS firstName, last_name AS lastName, username, email, phone, country, language, about, workshopsAttended, forumReplies, profile_image AS profileImage FROM users WHERE id = ?",
      [userId]
    );

    res.json({
      message: "Profile updated successfully",
      user: updatedUser[0] || {},
    });
  } catch (err) {
    console.error("Error updating user profile:", err);
    res.status(500).json({ message: "Error updating user profile" });
  }
};

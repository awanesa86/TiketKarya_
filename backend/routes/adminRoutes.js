// backend/routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Admin Dashboard & Stats
router.get("/dashboard-stats", adminController.getAdminDashboardStats); // cite: 1

// Admin Account Settings
router.route("/settings/:id")
  .get(adminController.getAdminAccountSettings) // cite: 1
  .put(adminController.updateAdminAccountSettings); // cite: 1

module.exports = router;
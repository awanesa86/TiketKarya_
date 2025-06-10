const express = require("express");
const router = express.Router();
const workshopController = require("../controllers/workshopController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/workshops", authMiddleware, workshopController.getWorkshops); // Admin view
router.get(
  "/workshops/submissions",
  authMiddleware,
  workshopController.getWorkshopSubmissions
);
router.get("/workshops/:id", authMiddleware, workshopController.getWorkshop);
router.post(
  "/workshops/submissions",
  authMiddleware,
  workshopController.createWorkshopSubmission
);
router.put("/workshops/:id", authMiddleware, workshopController.updateWorkshop);
router.delete(
  "/workshops/:id",
  authMiddleware,
  workshopController.deleteWorkshop
);
router.put(
  "/workshops/submissions/:id",
  authMiddleware,
  workshopController.processWorkshopSubmission
);

module.exports = router;

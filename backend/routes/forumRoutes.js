const express = require("express");
const router = express.Router();
const forumController = require("../controllers/forumController");
const authMiddleware = require("../middleware/authMiddleware");

// Get all forum topics
router.get("/topics", forumController.getForumTopics);

// Get a single forum topic and its comments
router.get("/topics/:id", forumController.getForumTopicAndComments);

// Create a new forum topic (requires authentication)
router.post("/topics", authMiddleware, forumController.createForumTopic);

// Delete a forum topic (requires authentication)
router.delete("/topics/:id", authMiddleware, forumController.deleteForumTopic);

// Create a new forum comment (requires authentication)
router.post(
  "/topics/:topicId/comments",
  authMiddleware,
  forumController.createForumComment
);

// Delete a forum comment (requires authentication)
router.delete(
  "/comments/:id",
  authMiddleware,
  forumController.deleteForumComment
);

module.exports = router;

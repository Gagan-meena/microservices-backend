const express = require("express");
const {
  createPost,
  getPost,
  updatePost,
  deletePost,
  getAllPostByUser,
} = require("../controllers/postController.js");

const router = express.Router();

router.post("/", createPost); // Route to create a new post
router.get("/:postId", getPost); // Route to retrieve a specific post by ID
router.put("/:postId", updatePost); // Route to update a specific post by ID
router.delete("/:postId", deletePost); // Route to delete a specific post by ID
router.get("/user/:userId", getAllPostByUser); // Route to get all posts by a specific user

module.exports = router;

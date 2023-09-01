const express = require("express");
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers); //Route for getting all users
router.post("/signup", createUser); //Route for creating a new user (sign-up)
router.get("/:userId", getUser); //Route for getting a specific user by ID
router.put("/:userId", updateUser); //Route for updating a specific user by ID
router.delete("/:userId", deleteUser); //Route for deleting a specific user by ID

module.exports = router;

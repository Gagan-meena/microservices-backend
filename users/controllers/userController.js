const catchAsyncErrors = require("../../middelwares/catchAsyncErrors.js");
const userService = require("../services/userService");

// Get a list of all users
const getUsers = catchAsyncErrors(async (req, res) => {
  const users = await userService.getUsers();
  res.status(200).json({ users });
});

// Create a new user
const createUser = catchAsyncErrors(async (req, res) => {
  const userData = req.body;
  const newUser = await userService.createUser(userData);
  res.status(201).json({ message: "User Created Successfully", newUser });
});

// Get a user by their ID
const getUser = catchAsyncErrors(async (req, res) => {
  const userId = req.params.userId;
  const user = await userService.getUser(userId);
  res.status(200).json({ user });
});

// Update a user's information
const updateUser = catchAsyncErrors(async (req, res) => {
  const userId = req.params.userId;
  const userData = req.body;
  const updatedUser = await userService.updateUser(userId, userData);
  res.status(200).json({ message: "Updated Successfully", updatedUser });
});

// Delete a user by their ID
const deleteUser = catchAsyncErrors(async (req, res) => {
  const userId = req.params.userId;
  const deletedUser = await userService.deleteUser(userId);
  res.status(200).json({ message: "User deleted successfully", deletedUser });
});

module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};

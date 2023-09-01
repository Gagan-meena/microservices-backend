const Users = require("../models/userModel");
const ErrorHandler = require("../../utils/errorHandler");

//Get all users
const getUsers = async () => {
  try {
    const users = await Users.findAll();
    if (!users) {
      throw new ErrorHandler("Unable to get all users", 500);
    }
    return users;
  } catch (error) {
    throw error;
  }
};

//Create a new user
const createUser = async (userData) => {
  const { username, email, password } = userData;
  try {
    const existingUser = await Users.findOne({
      where: { email },
    });

    if (existingUser) {
      throw new ErrorHandler("User already exists", 409);
    }

    const newUser = await Users.create({
      username,
      email,
      password,
    });

    if (!newUser) {
      throw new ErrorHandler("Unable to create new user", 400);
    }

    return newUser;
  } catch (error) {
    throw error;
  }
};

//Get a user by their ID
const getUser = async (userId) => {
  try {
    const user = await Users.findByPk(userId);
    if (!user) {
      throw new ErrorHandler("User not found", 404);
    }
    return user;
  } catch (error) {
    throw error;
  }
};

//Update a user's information
const updateUser = async (userId, userData) => {
  const { username, email, password } = userData;
  try {
    const user = await Users.findByPk(userId);

    if (!user) {
      throw new ErrorHandler("User not found", 404);
    }

    const updatedUser = await Users.update(
      { username, email, password },
      {
        where: { id: userId },
      }
    );

    return updatedUser;
  } catch (error) {
    throw error;
  }
};

//Delete a user by their ID
const deleteUser = async (userId) => {
  try {
    const user = await Users.findByPk(userId);

    if (!user) {
      throw new ErrorHandler("User not found", 404);
    }

    const deletedUser = await Users.destroy({
      where: { id: userId },
    });

    return deletedUser;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};

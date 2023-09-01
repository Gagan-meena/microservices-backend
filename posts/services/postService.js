const ErrorHandler = require("../../utils/errorHandler");
const Posts = require("../models/postModel.js");
const userService = require("../../users/services/userService.js");

//Get a user by their ID
const getUser = async (userId) => {
  try {
    const user = await userService.getUser(userId);
    return user;
  } catch (error) {
    throw error;
  }
};

//Get all posts by a specific user
const getAllPostByUser = async (userId) => {
  try {
    const userPosts = await Posts.find({ userId });

    if (!userPosts) {
      throw new ErrorHandler("Unable to get all user posts", 500);
    }

    return userPosts;
  } catch (error) {
    throw error;
  }
};

//Create a new post
const createPost = async (postData) => {
  try {
    const { userId, content } = postData;

    if (!userId || !content) {
      throw new ErrorHandler("Please provide userId and content", 400);
    }

    const user = await getUser(userId);
    console.log(user.dataValues);

    const newPost = await Posts.create({
      userId: userId,
      username: user.dataValues.username,
      content,
    });

    if (!newPost) {
      throw new ErrorHandler("Unable to create new post", 500);
    }
    return newPost;
  } catch (error) {
    throw error;
  }
};

//Get a specific post by its ID
const getPost = async (postId) => {
  try {
    const post = await Posts.findById(postId);
    if (!post) {
      throw new ErrorHandler("Post not Found", 404);
    }
    return post;
  } catch (error) {
    throw error;
  }
};

//Update a specific post by its ID
const updatePost = async (postId, postData) => {
  try {
    const post = await Posts.findById(postId);

    if (!post) {
      throw new ErrorHandler("Post not Found", 404);
    }

    const { content } = postData;

    const newPost = await Posts.findByIdAndUpdate(
      { _id: postId },
      { content },
      { new: true }
    );

    if (!newPost) {
      throw new Error("Unable to update post", 500);
    }
    return newPost;
  } catch (error) {
    throw error;
  }
};

//Delete a specific post by its ID
const deletePost = async (postId) => {
  try {
    const deletedPost = await Posts.findByIdAndDelete(postId);

    if (!deletedPost) {
      throw new ErrorHandler("Unable to delete post", 404);
    }

    return deletePost;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllPostByUser,
  createPost,
  getPost,
  updatePost,
  deletePost,
};

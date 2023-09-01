const catchAsyncErrors = require("../../middelwares/catchAsyncErrors.js");
const postService = require("../services/postService.js");

//Get all posts by a specific user
const getAllPostByUser = catchAsyncErrors(async (req, res) => {
  const userPosts = await postService.getAllPostByUser(req.params.userId);
  res.status(200).json({ userPosts });
});

//Create a new post
const createPost = catchAsyncErrors(async (req, res) => {
  const postData = req.body;

  const newPost = await postService.createPost(postData);

  res.status(201).json({
    message: "New Post created successfully",
    newPost,
  });
});

//Get a specific post by its ID
const getPost = catchAsyncErrors(async (req, res) => {
  const post = await postService.getPost(req.params.postId);

  res.status(200).json({
    post,
  });
});

//Update a specific post by its ID
const updatePost = catchAsyncErrors(async (req, res) => {
  const postData = req.body;
  const updatedPost = await postService.updatePost(req.params.postId, postData);

  res.status(200).json({
    message: "Post update seccessfully",
    updatedPost,
  });
});

//Delete a specific post by its ID
const deletePost = catchAsyncErrors(async (req, res) => {
  const deletedPost = await postService.deletePost(req.params.postId);

  res.status(200).json({
    message: "Post delete seccessfully",
    deletedPost,
  });
});

module.exports = {
  createPost,
  getPost,
  updatePost,
  deletePost,
  getAllPostByUser,
};

const mongoose = require("mongoose");

// Define a schema for posts
const postSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
      immutable: true,
    },
    username: {
      type: String,
      required: true,
      immutable: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;

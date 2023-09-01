const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./database/postsDb.js");
const errorMiddleware = require("../middelwares/errorMiddleware.js");
const router = require("./routers/postRouter.js");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
connectDb(); //Connect to the database

app.use("/", router);
app.use(errorMiddleware);// Use the error handling middleware

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

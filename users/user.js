const express = require("express");
const dotenv = require("dotenv").config();
const { connectDB } = require("./database/usersDb.js");
const errorMiddleware = require("../middelwares/errorMiddleware.js");
const router = require("./routers/userRouter.js");

const app = express();

const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json());
app.use("/", router);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

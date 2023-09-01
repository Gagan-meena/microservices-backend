const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/users", proxy("http://localhost:3000"));
app.use("/posts", proxy("http://localhost:3002"));

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

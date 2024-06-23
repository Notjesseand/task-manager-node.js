const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const productRoute = require("../routes/task.routes");
const cors = require("cors");
const connectDB = require("../db/connect");
const port = 3000;
require("dotenv").config();
// middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
// to enable addition of data to database in non json format like form data
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/tasks/", productRoute);

app.get("/", (req, res) => {
  res.send("<h1>home</h1>");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

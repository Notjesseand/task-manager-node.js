const express = require("express");
const router = express.Router();
const {
  getTask,
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

// getting all products in the databse
router.get("/", getTasks);

// getting a single product based on ID
router.get("/:id", getTask);

// adding a new product
router.post("/", addTask);

// updating a product
router.put("/:id", updateTask);

// deleting a product
router.delete("/:id", deleteTask);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getTask,
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

// getting all tasks in the databse
router.get("/", getTasks);

// getting a single task based on ID
router.get("/:id", getTask);

// adding a new task
router.post("/", addTask);

// updating a task
router.put("/:id", updateTask);

// deleting a task
router.delete("/:id", deleteTask);

module.exports = router;

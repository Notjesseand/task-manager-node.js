const Task = require("../models/tasks");
// fetching all data from the database
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// fetching a single task from the database
const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const singleTask = await Task.findById(id);
    if (!singleTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(singleTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// adding a new task
const addTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ message: "Task added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// updating a task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    const updatedTask = await Task.findById(id);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getTask,
  getTasks,
  addTask,
  updateTask,
  deleteTask,
};

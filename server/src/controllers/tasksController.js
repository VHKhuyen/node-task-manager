const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json({ success: true, tasks: tasks });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name)
      return res
        .status(400)
        .json({ success: false, message: "Name is required" });

    const newTask = await Task.create({ name });
    if (newTask) {
      return res.status(201).json({ success: true, task: newTask });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({
      _id: taskId,
    });
    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "not found task!" });
    }
    return res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate(
      {
        _id: taskId,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "not found task!" });
    }

    return res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndDelete({ _id: taskId });
    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "not found task!" });
    }

    return res.status(201).json({ success: true, task: task });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

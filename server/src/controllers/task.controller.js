const taskService = require("../services/task.service");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = await taskService.createTask({ title, description });
    res.status(200).json(newTask);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to create taks" });
  }
};

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const taskId = parseInt(id);

    if (isNaN(taskId)) {
      return res.status(400).json({ error: "Invalid task ID" });
    }

    const task = await taskService.getById(taskId);

    if (!task) return res.status(404).json({ error: "Task Not Found" });

    return res.json({ task });
  } catch (err) {
    console.log(err);
    res.status(505).json({ error: "Server is Error" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskId = parseInt(id);

    if (isNaN(taskId)) {
      return res.status(400).json({ error: "Invalid task ID" });
    }

    const { title, description, completed } = req.body;

    const updatedTask = await taskService.updateTask(taskId, {
      title,
      description,
      completed,
    });

    res.json(updatedTask);
  } catch (err) {
    console.log(err);
    // Prisma error: record not found
    if (err.code === "P2025") {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(500).json({ error: "Faild to update task" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskId = parseInt(id);

    if (isNaN(taskId)) {
      return res.status(400).json({ error: "Invalid task ID" });
    }

    await taskService.deleteTask(taskId);

    res.json({ message: `Task with id ${taskId} deleted successfully` });
  } catch (err) {
    console.log(err);
    if (err.code === "P2025") {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(500).json({ error: "Faild to delete task" });
  }
};

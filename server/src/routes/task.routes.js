const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");

//[GET] /api/tasks
router.get("/", taskController.getAllTasks);

//[POST] /api/tasks
router.post("/", taskController.createTask);

// //[GET] /api/tasks/:id
router.get("/:id", taskController.getById);

// //[PUT] /api/tasks/:id
router.put("/:id", taskController.updateTask);

// //[DELETE] /api/tasks/:id
router.delete("/:id", taskController.deleteTask);

module.exports = router;

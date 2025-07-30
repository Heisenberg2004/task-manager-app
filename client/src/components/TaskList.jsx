import React, { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build Task Manager", completed: true },
  ]);

  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    const newItem = {
      id: Date.now(),
      title: newTask.trim(),
      completed: false,
    };

    setTasks([...tasks, newItem]);
    setNewTask("");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Task List</h2>

      <div className="flex mb-4 gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Task"
          className="flex-1 p-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

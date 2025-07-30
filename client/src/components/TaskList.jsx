import React from "react";

const TaskList = () => {
  const tasks = [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build Task Manager", completed: true },
    { id: 3, title: "Commit to Git", completed: false },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Task List</h2>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-3 rounded-lg ${
              task.completed ? "bg-green-100" : "bg-gray-100"
            }`}
          >
            <span
              className={`${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {task.title}
            </span>
            <input type="checkbox" checked={task.completed} readOnly />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

import React from "react";

const TaskItem = ({ task, onToggle, handleDelete }) => {
  return (
    <li className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg">
      <span className={task.completed ? "line-through text-gray-400" : ""}>
        {task.title}
      </span>
      <span
        className="text-sm text-gray-500 "
        onClick={() => onToggle(task.id)}
      >
        {task.completed ? "✅ Done" : "🕒 Pending"}
      </span>
      <button
        className="p-2 rounded-lg hover:bg-red-500"
        onClick={() => handleDelete(task.id)}
      >
        🗑️
      </button>
    </li>
  );
};

export default TaskItem;

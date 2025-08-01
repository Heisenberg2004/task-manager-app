import React from "react";

const TaskItem = ({ task, onToggle }) => {
  return (
    <li
      className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg"
      onClick={() => onToggle(task.id)}
    >
      <span className={task.completed ? "line-through text-gray-400" : ""}>
        {task.title}
      </span>
      <span className="text-sm text-gray-500">
        {task.completed ? "✅ Done" : "🕒 Pending"}
      </span>
    </li>
  );
};

export default TaskItem;

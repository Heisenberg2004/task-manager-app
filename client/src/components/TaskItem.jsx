import React from "react";

const TaskItem = ({ task }) => {
  return (
    <li
      className={`flex justify-between items-center p-3 rounded-lg ${
        task.completed ? "bg-green-100" : "bg-gray-100"
      }`}
    >
      <span className={`${task.completed ? "line-through text-gray-400" : ""}`}>
        {task.title}
      </span>
      <input type="checkbox" checked={task.completed} readOnly />
    </li>
  );
};

export default TaskItem;

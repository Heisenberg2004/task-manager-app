import React, { useState } from "react";

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedTitle.trim() !== "") {
      onEdit(task.id, editedTitle.trim());
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
  };

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

      {isEditing ? (
        <>
          <input
            className="border px-1 rounded"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <button onClick={handleSave}>✅</button>
        </>
      ) : (
        <>
          <button onClick={handleEdit}>✏️</button>
        </>
      )}

      <button
        className="p-2 rounded-lg hover:bg-red-500"
        onClick={() => onDelete(task.id)}
      >
        🗑️
      </button>
    </li>
  );
};

export default TaskItem;

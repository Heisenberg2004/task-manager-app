import React from "react";
import TaskItem from "./TaskItem";

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
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

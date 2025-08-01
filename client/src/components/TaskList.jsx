import React, { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  // ไว้อัพเดต รายการงาน
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build Task Manager", completed: true },
  ]);
  // เก็บข้อความที่พิมพ์ใน input และ setNewTask ใช้เปลี่ยนข้อความนี้ เมื่อพิมพ์ หรือเมื่อ Add แล้วต้องล้าง input
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return; // เช็คว่า newTask เป็นค่าว่างมั้ย

    // สร้าง task ใหม่ (object)
    const newItem = {
      id: Date.now(), // สร้าง ID ใหม่จาก timestamp
      title: newTask.trim(), // ใช้ข้อความที่ผู้ใช้พิมพ์
      completed: false, // task ใหม่ = false
    };

    setTasks([...tasks, newItem]); // เอา array เก่า tasks มาคลาย (...tasks), ต่อท้ายด้วย newItem -> กล้ายเป็น array ใหม่ที่มี task ใหม่ต่อท้าย
    setNewTask(""); // หลังจากเพิ่ม task แล้วรีเช็ตช่อง input ให้ว่าง
  };

  const toggleComplete = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
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
          <TaskItem key={task.id} task={task} onToggle={toggleComplete} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllTasks = async () => {
  const tasks = await prisma.task.findMany();
  return tasks;
};

exports.createTask = async (data) => {
  const newTask = await prisma.task.create({
    data,
  });
  return newTask;
};

exports.getById = async (id) => {
  const task = await prisma.task.findUnique({
    where: {
      id: Number(id),
    },
  });
  return task;
};

exports.updateTask = async (id, data) => {
  const updatedTask = await prisma.task.update({
    where: {
      id: Number(id),
    },
    data,
  });
  return updatedTask;
};

exports.deleteTask = async (id) => {
  const deletedTask = await prisma.task.delete({
    where: { id: Number(id) },
  });
  return deletedTask;
};

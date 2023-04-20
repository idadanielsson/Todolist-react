import { ITodo } from "../models/ITodo";

export const getTodoListFromLs = () => {
  const todoListFromLs = localStorage.getItem("todoList");
  return todoListFromLs ? JSON.parse(todoListFromLs) : [];
};

export const saveTodoListToLs = (todoList: ITodo[]) => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

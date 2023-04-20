import { useEffect, useState } from "react";
import { ITodo, todos } from "../models/ITodo";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import "./Todoapp.scss";
import { getTodoListFromLs, saveTodoListToLs } from "../services/localStorage";

export function TodoApp() {
  const [todoList, setTodoList] = useState<ITodo[]>(getTodoListFromLs());

  const addItem = (t: ITodo) => {
    setTodoList([...todoList, t]);
  };

  const deleteTask = (i: number) => {
    console.log(`deleting item at index ${i}...`);
    console.log(todoList);

    let remove = [...todoList];
    remove.splice(i, 1);
    setTodoList(remove);

    console.log(`new todoList:`);
    console.log(todoList);
  };

  const handleToggle = (i: number) => {
    setTodoList((prevTodoList) => {
      const newTodoList = [...prevTodoList];
      newTodoList[i].isFinished = !newTodoList[i].isFinished;
      return newTodoList;
    });
  };
  useEffect(() => {
    saveTodoListToLs(todoList);
  }, [todoList]);

  return (
    <>
      <AddTodo addTodo={addItem} todos={todos}></AddTodo>
      <h4 className="todo-title">To do</h4>
      <TodoList
        todos={todoList}
        delete={deleteTask}
        toggle={handleToggle}
      ></TodoList>
      <hr className="rounded"></hr>
    </>
  );
}

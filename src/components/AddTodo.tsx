import { ChangeEvent, FormEvent, useState } from "react";
import { ITodo, todos } from "../models/ITodo";
import "./Todoapp.scss";
import { IoIosAddCircle } from "react-icons/io";
import { TodoList } from "./TodoList";

interface IAddTodoProps {
  todos: ITodo[];
  addTodo(t: ITodo): void;
}

export function AddTodo(props: IAddTodoProps) {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim() === "") return;
    props.addTodo({
      task: task,
      isFinished: false,
    });
    setTodoList([...props.todos]);
    setTask("");
  };

  return (
    <div className="todo">
      <form onSubmit={handleSubmit} className="form">
        <div className="add">
          <input
            placeholder="Add item"
            type="text"
            name="task"
            value={task}
            onChange={handleChange}
            className="add__input"
          />
          <button className="add__button">
            <IoIosAddCircle className="add__button__icon"></IoIosAddCircle>
          </button>
        </div>
        <hr className="rounded"></hr>
      </form>
    </div>
  );
}

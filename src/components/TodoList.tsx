import { ChangeEvent, useEffect, useState } from "react";
import { ITodo, todos } from "../models/ITodo";
import "./TodoList.scss";
import { BsTrash3 } from "react-icons/bs";

interface IListProps {
  todos: ITodo[];
  delete(i: number): void;
  toggle(i: number): void;
}

export function TodoList(props: IListProps) {
  const handleClick = (i: number) => {
    props.delete(i);
  };

  const handleToggle = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    const newTodos = [...props.todos];
    newTodos[i].isFinished = e.target.checked;
    props.toggle(i);
  };

  const html = props.todos
    .filter((item) => item.task)
    .map((item, i) => {
      return (
        <div className="todos" key={i}>
          <div className="task">
            <input
              type="checkbox"
              checked={item.isFinished}
              className="task__checkbox"
              onChange={(e) => handleToggle(e, i)}
            />
            <ul className={item.isFinished ? "checked" : "unchecked"} id="list">
              <li className="task__item">{item.task}</li>
            </ul>
            <button
              className="task__btn"
              onClick={() => {
                handleClick(i);
              }}
            >
              <BsTrash3 className="task__btn__delete"></BsTrash3>
            </button>
          </div>
        </div>
      );
    });

  return <>{html}</>;
}

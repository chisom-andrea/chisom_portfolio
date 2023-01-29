import React from "react";
import "./todo-list.css";
import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
const List = ({ todos, setTodos }) => {
   
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };
  return (
    <div>
      {todos.map((todos, id) => (
        <ul>
          <li key={id}>
            <button>
              <FaCheck />
            </button>
            <input
              type="text"
              value={todos.id}
              onChange={(event) => event.preventDefault()}
              class="list"
            ></input>
            <button onClick={() => handleDelete(todos)}>
              <FaTrash />
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default List;

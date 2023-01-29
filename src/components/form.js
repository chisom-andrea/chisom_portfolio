import React, { useEffect} from "react";
import "./form.css";
import {v4 as uuidv4} from "uuid"
const Todo = ({ input, setInput, todos, setTodos }) => {

    useEffect(() => {
        console.log('ppppppppp', input)
    }, [input])

    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos,{id: uuidv4(), title: input, completed: false}]);
        setInput("");
    }
  return (
    <div>
      <form onSubmit={onFormSubmit}class="form">
        <input
          type="text"
          placeholder="Add new todo and click enter"
          vlaue={input}
          class="enterTodo"
          onChange={onInputChange}
        ></input>
      </form>
    </div>
  );
};
export default Todo;

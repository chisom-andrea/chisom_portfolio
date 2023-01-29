import React from "react";
import Header from "./components/header";
import Todo from "./components/form";
import { useState } from "react";
import List from "./components/todo-list";
const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Header />
      <Todo
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;

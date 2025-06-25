import {useState} from "react";
import {Form} from "./Form";
import {TodoList} from "./TodoList";
import "./Todo.css";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className='todoContainer'>
      <Form setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

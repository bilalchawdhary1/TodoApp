import {useState} from "react";
import {TodoItems} from "./TodoItems";

export const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (todo.trim() === "") {
      setError("Todo input cannot be empty!");
      return;
    }

    setTodos([...todos, todo]);
    setTodo("");
    setError("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={e => setTodo(e.target.value)}
          type='text'
          placeholder='Enter a todo'
        />
        <button type='submit'>Add Todo</button>
      </form>

      {/* Show error if any */}
      {error && <p style={{color: "red"}}>{error}</p>}

      <ul>
        {todos.map((todoitem, index) => (
          <li key={index}>
            <TodoItems todoitem={todoitem} />
          </li>
        ))}
      </ul>

      {/* Show total count */}
      {todos.length > 0 && <h4>Total items: {todos.length}</h4>}
    </div>
  );
};

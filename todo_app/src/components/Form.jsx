import {useState} from "react";
import "./Form.css";

export const Form = ({setTodos, todos}) => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (todo.trim() === "") {
      setError("Todo input cannot be empty!");
      return;
    }

    const newTodo = {
      id: Date.now(), // unique ID
      text: todo, // the input text
      done: false, // default status
    };

    setTodos([...todos, newTodo]);
    setTodo("");
    setError("");
  };

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={e => setTodo(e.target.value)}
          type='text'
          placeholder='Enter a todo'
        />
        <button type='submit'>Add Todo</button>
        {error && <p className='errorText'>{error}</p>}
      </form>
    </div>
  );
};

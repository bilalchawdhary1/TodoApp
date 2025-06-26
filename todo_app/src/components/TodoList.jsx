import {TodoItems} from "./TodoItems";
import "./TodoList.css";

export const TodoList = ({todos, setTodos}) => {
  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggle = id => {
    setTodos(
      todos.map(todo => (todo.id === id ? {...todo, done: !todo.done} : todo))
    );
  };

  return (
    <div className='todoListContainer'>
      <ul>
        {todos.map(todoitem => (
          <li key={todoitem.id}>
            <TodoItems
              todoitem={todoitem}
              onDelete={handleDelete}
              onToggle={handleToggle}
            />
          </li>
        ))}
      </ul>
      {todos.length > 0 && (
        <h4 className='totalCount'>Total items: {todos.length}</h4>
      )}
    </div>
  );
};

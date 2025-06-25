import {TodoItems} from "./TodoItems";
import "./TodoList.css";

export const TodoList = ({todos, setTodos}) => {
  const handleDelete = indexToDelete => {
    setTodos(todos.filter((_, index) => index !== indexToDelete)); // Explanation: This filters out the todo item at the specified index.
  };

  return (
    <div className='todoListContainer'>
      <ul>
        {todos.map((todoitem, index) => (
          <li key={index}>
            <TodoItems
              todoitem={todoitem}
              onDelete={() => handleDelete(index)}
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

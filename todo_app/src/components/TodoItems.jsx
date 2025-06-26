import "./TodoItems.css";

export const TodoItems = ({todoitem, onDelete, onToggle}) => {
  return (
    <div className='todoItemContainer'>
      <input
        type='checkbox'
        checked={todoitem.done}
        onChange={() => onToggle(todoitem.id)}
      />
      <span className={`todoItemText ${todoitem.done ? "done" : ""}`}>
        {todoitem.text}
      </span>
      <button className='deleteBtn' onClick={() => onDelete(todoitem.id)}>
        Delete
      </button>
    </div>
  );
};

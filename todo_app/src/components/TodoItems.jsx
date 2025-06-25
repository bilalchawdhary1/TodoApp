import "./TodoItems.css";

export const TodoItems = ({todoitem, onDelete}) => {
  return (
    <div className='todoItemContainer'>
      <span className='todoItemText'>{todoitem}</span>
      <button className='deleteBtn' onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

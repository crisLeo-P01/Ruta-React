import './TodoList.css';

function TodoList({ children }) {
  return(
    <ul className="Ul-Todolist">
      { children }
    </ul>
  );
}

export { TodoList };
import './TodoCounter.css'

function TodoCounter({ completed, total }) {
  return(
    <h1 className='task-completed'>
      Has completado { completed } de { total } ToDos
    </h1>
  );
}

export { TodoCounter };
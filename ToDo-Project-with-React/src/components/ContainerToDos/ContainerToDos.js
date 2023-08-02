import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';

import './ContainerToDos.css';

const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar curso de React.js', completed: false },
    { text: 'Mirar el partido del Manchester United', completed: true },
    { text: 'Llamar a la clínica', completed: false },
];

function ContainerToDos() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuario buscan todos de ' + searchValue);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  return(
    <>
      <div className='container-todos'>
        <h1 className='title-todos'>Your tasks</h1>
        <TodoCounter 
          completed={ completedTodos }
          total={ totalTodos }
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoList>
          { defaultTodos.map( todo => (
            <TodoItem
                key = { todo.text}
                text = { todo.text }
                completed = { todo.completed }
            />
          ))}
        </TodoList>
      </div>
    </>
  )
}

export { ContainerToDos };
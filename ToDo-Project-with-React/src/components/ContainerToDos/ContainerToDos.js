import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';

import './ContainerToDos.css';

const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar curso de React.js', completed: false },
    { text: 'Mirar el partido del Manchester United', completed: false },
    { text: 'Llamar a la clínica', completed: false },
];

function ContainerToDos() {
  return(
    <>
      <div className='container-todos'>
        <h1 className='title-todos'>Your task</h1>
        <TodoCounter completed={ 5 } total={ 9 }/>
        <TodoSearch />

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
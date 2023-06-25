import React from "react";
import './App.css';

import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';

const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar curso de React.js', completed: false },
    { text: 'Mirar el partido del Manchester United', completed: false },
    { text: 'Llamar a la clínica', completed: false },
]

function App() {
  return (
    <React.Fragment>
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

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;

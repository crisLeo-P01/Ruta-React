import React from "react";
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';

import "./ContainerCreateTodo.css"
import portada from "../../images/portada.jpg"

function ContainerCreateTodo() {
  return(
    <>
      <div className="container-create-task">
        <h3>Create new Task</h3>
        
        <input type="text" placeholder={ "I have to go to the supermarket" } />
        <CreateTodoButton />

        <img src={ portada } alt={ "portada" } width={ 497 } />
      </div>
    </>
  )
}

export { ContainerCreateTodo };
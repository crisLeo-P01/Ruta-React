import React from "react";
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';

import "./ContainerCreateTodo.css"
import portada from "../../images/portada.jpg"

function ContainerCreateTodo() {
  return (
    <div className="container-create-task">
      <div className="container-title">
        <h3>Create new Task</h3>

        <input type="text" placeholder={"I have to go to the supermarket"} />
        <CreateTodoButton />
      </div>

      <img src={portada} alt={"portada"} className="img-portada" />
    </div>
  )
}

export { ContainerCreateTodo };
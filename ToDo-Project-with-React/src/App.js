import React from "react";

import "./App.css"

import { TitleTodo } from "./components/TitleTodo/TitleTodo"
import { ContainerToDos } from "./components/ContainerToDos/ContainerToDos";
import { ContainerCreateTodo } from "./components/ContainerCreateTodo/ContainerCreateTodo";

function App() {
  return (
    <>
      <div className="container">
        <TitleTodo />
        <div className="container-boby-main">
          <ContainerCreateTodo />
          <ContainerToDos />
        </div>
      </div>
    </>
  );
}

export default App;

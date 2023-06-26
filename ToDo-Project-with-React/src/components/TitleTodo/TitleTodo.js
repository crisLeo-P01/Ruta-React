import React from "react";

import './TitleTodo.css';
import hand from "../../images/icons/ico-hand.svg";

function TitleTodo() {
  return(
    <>
      <div className="block-container">
        <img src={ hand } alt={ 'saludar' } width={ 30 } />
        <h1 className="title-main">Hi, Cristian</h1>
      </div>
    </>
  )
}

export { TitleTodo };
import "./CreateTodoButton.css"

import plus from "../../images/icons/ico-plus.svg"

function CreateTodoButton() {
  return(
    <button>
      <img src={ plus } alt={ "Create task" } />
      <span>Create task</span>
    </button>
  );
}

export { CreateTodoButton }
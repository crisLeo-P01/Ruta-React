import "./TodoItem.css";

import check from "../../images/icons/check.svg";
import trash from "../../images/icons/ico-trash.svg";
import edit from "../../images/icons/ico-edit.svg";

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed && "TodoItem--complete"}`}>
      <button className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onComplete}>
        <img src={check} alt={check} />
      </button>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <div className="Container-edit-delete">
        <button className="Icon Icon-edit">
          <img src={edit} alt={edit} />
        </button>
        <button className="Icon Icon-delete" onClick={props.onDelete}>
          <img src={trash} alt={trash} />
        </button>
      </div>
    </li>
  );
}

export { TodoItem };

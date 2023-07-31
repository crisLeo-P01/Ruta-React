import './TodoItem.css';

import check from '../../images/icons/check.svg';

function TodoItem( props ) {
  return(
    <li className="TodoItem TodoItem--complete">
      <span className="Icon Icon-check Icon-check--active"><img src={ check } alt={ check } /></span>
      <p className="TodoItem-p TodoItem-p--complete">{ props.text }</p>
      <span className="Icon Icon-delete">X</span>
    </li>
  );
}

export { TodoItem }
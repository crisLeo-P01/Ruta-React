import './TodoSearch.css';

import search  from '../../images/icons/ico-search.svg';

function TodoSearch() {
  return(
    <div className='Container-input-search'>
      <input className="Input-todo-search" placeholder="Cortar cebolla" />
      <button className='btn-search'><img src={ search } alt={ "search" } /></button>
    </div>
  );
}

export { TodoSearch };
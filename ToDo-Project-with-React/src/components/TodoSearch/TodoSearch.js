import React from "react";
import "./TodoSearch.css";

import search from "../../images/icons/ico-search.svg";

function TodoSearch({
  searchValue,
  setSearchValue,
}) {
  return (
    <div className="Container-input-search">
      <input
        className="Input-todo-search"
        placeholder="Cortar cebolla"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value)
        }}
      />
      <button className="btn-search">
        <img src={search} alt={"search"} />
      </button>
    </div>
  );
}

export { TodoSearch };

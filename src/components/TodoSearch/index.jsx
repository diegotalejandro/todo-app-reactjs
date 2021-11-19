import React, { useState, useEffect, useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Search task"
      onChange={onSearchValueChange}
      value={searchValue}
    />
  );
}

export { TodoSearch };

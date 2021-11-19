import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

export function TodoCounter() {
  const { todoList } = useContext(TodoContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let tempCount = 0;
    todoList.forEach((todo) => {
      if (todo.completed) tempCount++;
    });
    setCount(tempCount);
  }, [todoList]);

  return (
    <>
      <h1 className="TodoCounter-title">TODO's List🗒</h1>
      <h2 className="TodoCounter-subtitle">
        You have completed {count} of {todoList.length} tasks
      </h2>
    </>
  );
}

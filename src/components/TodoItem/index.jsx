import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        {props.completed ? (
          "✅"
        ) : (
          <input
            type="checkbox"
            name="task"
            id="task"
            onClick={() => props.onComplete()}
          />
        )}
      </span>

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={() => props.onDelete()}>
        🗑
      </span>
    </li>
  );
}

export { TodoItem };

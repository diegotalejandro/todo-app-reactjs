import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      {/* <span
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
      </span> */}
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
        onNotComplete={props.onNotComplete}
      />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      {/* <span className="Icon Icon-delete" onClick={() => props.onDelete()}>
        🗑
      </span> */}
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };

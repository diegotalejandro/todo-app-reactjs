import React from "react";
import "./CreateTodoButton.css";

function AppUI({ onClickButton }) {
  return (
    <div
      className="CreateTodoContainer"
      onClick={() => onClickButton("Here should open a modal!")}
    >
      <button>✚</button>
    </div>
  );
}

export { AppUI };

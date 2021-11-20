import React from "react";
import "./CreateTodoButton.css";

function AppUI({ onClickButton, openModal }) {
  return (
    <div
      className="CreateTodoContainer"
      onClick={() => onClickButton("Here should open a modal!")}
    >
      <button className={openModal ? "ButtonModalOpen" : ""}>✚</button>
    </div>
  );
}

export { AppUI };

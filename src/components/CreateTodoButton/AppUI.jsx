import React from "react";
import "./CreateTodoButton.css";

function AppUI({ onClickButton, openModal, fixed }) {
  return (
    <div
      className={fixed ? "CreateTodoContainer fixed" : "CreateTodoContainer"}
      onClick={() => onClickButton("Here should open a modal!")}
    >
      <button className={openModal ? "ButtonModalOpen" : ""}>✚</button>
    </div>
  );
}

export { AppUI };

import React from "react";
import { AppUI } from "./AppUI";

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    props.setOpenModal((prevState) => !prevState);
  };
  return <AppUI onClickButton={onClickButton} openModal={props.openModal} />;
}

export { CreateTodoButton };

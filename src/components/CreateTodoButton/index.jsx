import React from "react";
import { AppUI } from "./AppUI";

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    alert(msg);
  };
  return <AppUI onClickButton={onClickButton} />;
}

export { CreateTodoButton };

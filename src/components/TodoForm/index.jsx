import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm(props) {
  const { addTodo } = useContext(TodoContext);
  const [taskDescription, setTaskDescription] = useState("");

  const onChange = (e) => setTaskDescription(e.target.value);

  const onCancel = () => {
    setTaskDescription("");
    props.setOpenModal((prevState) => !prevState);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(taskDescription);
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <form onSubmit={onSubmit} className="TodoForm-form">
      <label>New Task</label>
      <textarea
        onChange={onChange}
        placeholder="Description of the task"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <div className="TodoForm-button-container">
        <button onClick={onCancel} type="button">
          Cancel
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export { TodoForm };

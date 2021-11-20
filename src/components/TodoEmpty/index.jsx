import { VscSearchStop, VscAdd } from "react-icons/vsc";
import { CreateTodoButton } from "../CreateTodoButton";
import "./TodoEmpty.css";

function TodoEmpty({ searchValue, setOpenModal, openModal }) {
  return (
    <div className="TodoEmpty-container">
      {searchValue ? (
        <>
          <VscSearchStop className="TodoEmpty-SVG" />
          <p className="TodoEmpty-text">Tasks not found</p>
        </>
      ) : (
        <>
          {/* <VscAdd className="TodoEmpty-SVG" /> */}
          <CreateTodoButton
            setOpenModal={setOpenModal}
            openModal={openModal}
            fixed={false}
          />
          <p className="TodoEmpty-text">Add a new task</p>
        </>
      )}
    </div>
  );
}
export { TodoEmpty };

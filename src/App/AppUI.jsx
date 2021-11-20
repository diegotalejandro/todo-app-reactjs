import "./App.css";
import { useContext } from "react";
import { TodoContext } from "../components/TodoContext";
import { TodoCounter } from "../components/TodoCounter/index";
import { TodoItem } from "../components/TodoItem/index";
import { TodoList } from "../components/TodoList/index";
import { TodoSearch } from "../components/TodoSearch/index";
import { CreateTodoButton } from "../components/CreateTodoButton/index";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";

function AppUI() {
  const {
    todoFilteredList,
    completeTodo,
    deleteTodo,
    loading,
    error,
    todoList,
    searchValue,
    setSearchValue,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <div className="App">
      <div className="app-container">
        <TodoCounter />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {todoFilteredList?.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))}
          {todoFilteredList?.length
            ? null
            : !loading && <h3 className="message">No tasks</h3>}
          {loading ? <h3 className="message">Loading</h3> : null}
          {error ? <h3 className="message">{error}</h3> : null}
        </TodoList>
        {!!openModal && (
          <Modal>
            <TodoForm setOpenModal={setOpenModal} />
          </Modal>
        )}

        <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
      </div>
    </div>
  );
}

export { AppUI };

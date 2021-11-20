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
import { TodoLoading } from "../components/TodoLoading";
import { TodoError } from "../components/TodoError";
import { TodoEmpty } from "../components/TodoEmpty";

function AppUI() {
  const {
    todoFilteredList,
    completeTodo,
    notCompleteTodo,
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
              onNotComplete={() => notCompleteTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))}
          {todoFilteredList?.length
            ? null
            : !loading && (
                <TodoEmpty
                  searchValue={searchValue ? true : false}
                  setOpenModal={setOpenModal}
                  openModal={openModal}
                />
              )}

          {loading
            ? new Array(5).fill(1).map((a, i) => <TodoLoading key={i} />)
            : null}
          {error ? <TodoError error={error} /> : null}
        </TodoList>
        {!!openModal && (
          <Modal>
            <TodoForm setOpenModal={setOpenModal} />
          </Modal>
        )}

        <CreateTodoButton
          setOpenModal={setOpenModal}
          openModal={openModal}
          fixed={true}
        />
      </div>
    </div>
  );
}

export { AppUI };

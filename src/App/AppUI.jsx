import "./App.css";
import { useContext } from "react";
import { TodoContext } from "../components/TodoContext";
import { TodoCounter } from "../components/TodoCounter/index";
import { TodoItem } from "../components/TodoItem/index";
import { TodoList } from "../components/TodoList/index";
import { TodoSearch } from "../components/TodoSearch/index";
import { CreateTodoButton } from "../components/CreateTodoButton/index";
import { Modal } from "../components/Modal";

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
  } = useContext(TodoContext);
  return (
    <>
      <div className="app-container">
        <TodoCounter />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {todoFilteredList.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))}
          {loading ? <h3>Loading</h3> : null}
          {error ? <h3>{error}</h3> : null}
        </TodoList>
        {/* <Modal>
          <h1>Modal!</h1>
        </Modal> */}
        <CreateTodoButton />
      </div>
    </>
  );
}

export { AppUI };

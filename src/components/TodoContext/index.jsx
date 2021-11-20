import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {
  const {
    item: todoList,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  // const [todoFilteredList, setTodoFilteredList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  let todoFilteredList = [];
  if (searchValue.length) {
    const newTodosList = todoList.filter((todo) =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
    // setTodoFilteredList(newTodosList);
    todoFilteredList = newTodosList;
  } else {
    // setTodoFilteredList(todoList);
    todoFilteredList = todoList;
  }

  const addTodo = (text) => {
    const newTodosList = [...todoList];
    newTodosList.push({
      id: todoList[todoList?.length - 1]?.id + 1,
      completed: false,
      text: text,
    });
    saveTodos(newTodosList);
  };

  const completeTodo = (id) => {
    const todoIndex = todoList.findIndex((todo) => todo.id === id);
    const newTodosList = [...todoList];
    newTodosList[todoIndex].completed = true;
    saveTodos(newTodosList);
  };

  const notCompleteTodo = (id) => {
    const todoIndex = todoList.findIndex((todo) => todo.id === id);
    const newTodosList = [...todoList];
    newTodosList[todoIndex].completed = false;
    saveTodos(newTodosList);
  };

  const deleteTodo = (id) => {
    const todoIndex = todoList.findIndex((todo) => todo.id === id);
    const newTodosList = [...todoList];
    newTodosList.splice(todoIndex, 1);
    saveTodos(newTodosList);
  };

  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        todoList,
        todoFilteredList,
        addTodo,
        completeTodo,
        notCompleteTodo,
        deleteTodo,
        searchValue,
        setSearchValue,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

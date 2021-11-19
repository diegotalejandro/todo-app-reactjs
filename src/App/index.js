import { useState, useEffect } from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../components/TodoContext";

// const todos = [
// { id: 1, text: "Tarea 1", completed: true },
// { id: 2, text: "Tarea 2", completed: false },
// { id: 3, text: "Tarea 3", completed: false },
// { id: 4, text: "Tarea 4", completed: false },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;

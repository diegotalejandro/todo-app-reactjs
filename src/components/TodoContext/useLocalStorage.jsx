import React, { useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  setTimeout(() => {
    try {
      const localStorageTodos = localStorage.getItem(itemName);
      let parsedItems;
      if (!localStorageTodos) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItems = [];
      } else {
        parsedItems = JSON.parse(localStorageTodos);
      }
      setItem(parsedItems);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, 500);

  const saveItem = (newTodos) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newTodos));
      setItem(newTodos);
    } catch (err) {
      setError(err);
    }
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };

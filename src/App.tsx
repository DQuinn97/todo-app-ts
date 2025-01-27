import React, { useState } from "react";
import TodoList from "./components/TodoList";
import type { TodoItemType, TodoFunction, TodoHandler } from "./types";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const addTodo: TodoHandler = (e: React.FormEvent) => {
    //@ts-ignore
    if (e.target.name.value === "") {
      //@ts-ignore
      e.target.name.classList.add("error");
      return;
    }
    setTodos([
      ...todos,
      {
        _id: nanoid(),
        //@ts-ignore
        name: e.target.name.value,
        checked: false,
      },
    ]);
    //@ts-ignore
    e.target.name.value = "";
  };
  const removeTodo: TodoFunction = (id: string) => {
    setTodos(todos.filter((todo) => todo._id !== id));
  };
  const updateTodo: TodoFunction = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <>
      <main>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            addTodo(e);
          }}
        >
          <input
            type="text"
            placeholder="Enter new item"
            name="name"
            onChange={(e) => {
              e.target.classList.remove("error");
            }}
          />
          <button>+</button>
        </form>
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        ></TodoList>
      </main>
    </>
  );
}

export default App;

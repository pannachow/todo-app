import React, { useRef } from "react";
import {
  ClipboardListIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/solid";
import { UseStore } from "zustand";
import { AppState, Filter, Todo } from "../types";

type Props = {
  useStore: UseStore<AppState>;
};

export default function Todos(props: Props) {
  const { todos, setTodos, filter } = props.useStore();
  const todoRef = useRef<HTMLInputElement>(null);

  function tryAddTodo() {
    if (todoRef.current?.value) {
      const newTodo = { done: false, message: todoRef.current.value };
      setTodos([...todos, newTodo]);
      todoRef.current.value = "";
    }
  }

  function removeTodo(i: number) {
    todos.splice(i, 1);
    setTodos(todos);
  }

  function toggleDone(i: number) {
    const todo = todos[i];
    todo.done = !todo.done;
    setTodos(todos);
  }

  return (
    <main
      className="
        flex
        flex-col
        items-center
        max-w-4xl
        box-border
        border-2
        border-indigo-100
        shadow-lg
        rounded-lg
        p-6
      "
    >
      <div className="flex flex-row justify-center items-center">
        <ClipboardListIcon className="w-9 h-9 text-indigo-300" />
        <p className="text-indigo-400 text-xl font-bold">TODO</p>
      </div>

      <div className="flex space-x-6">
        <input
          data-testid="input"
          className="placeholder-green-200 font-black text-2xl text-green-300 my-4 p-2"
          type="text"
          placeholder="What needs to be done?"
          ref={todoRef}
        />
        <button
          data-testid="addTodo"
          className="
            text-blue-600
            text-sm
            font-bold
            text-opacity-75
            ring
            ring-offset-4
            ring-offset-green-100
            focus:outline-none
            rounded-full
            my-8
            px-2
          "
          onClick={tryAddTodo}
        >
          Add New Task
        </button>
      </div>

      <div className="w-full" data-testid="container">
        {todos.filter(getFilterFunction(filter)).map((todo, i) => (
          <div key={i} className="flex my-2">
            <button
              onClick={() => toggleDone(i)}
              className="focus:outline-none"
            >
              {todo.done ? (
                <CheckCircleIcon className="w-6 h-6 text-indigo-300" />
              ) : (
                <div className="w-6 h-6 rounded-full border border-indigo-300"></div>
              )}
            </button>

            <p
              className={`flex-grow overflow-ellipsis font-bold mx-4 ${
                todo.done ? "line-through text-indigo-200" : "text-indigo-400"
              }`}
            >
              {todo.message}
            </p>

            <button
              onClick={() => removeTodo(i)}
              className="focus:outline-none"
            >
              <XCircleIcon className="w-6 h-6 text-indigo-300" />
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

function getFilterFunction(filter: Filter): (todo: Todo) => boolean {
  if (filter === "Active") {
    return (todo) => !todo.done;
  }
  if (filter === "Done") {
    return (todo) => todo.done;
  }
  return () => true;
}

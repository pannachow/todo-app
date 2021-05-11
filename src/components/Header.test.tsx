import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import create from "zustand";
import { AppState } from "../types";

test("plural text when no todos", () => {
  render(<Header useStore={getStoreWithNumTodos(0)} />);
  const tasksLeftElement = screen.getByTestId("tasks-left");
  expect(tasksLeftElement).toHaveTextContent("You have 0 new tasks today");
});

test("singular text when single todo", () => {
  render(<Header useStore={getStoreWithNumTodos(1)} />);
  const tasksLeftElement = screen.getByTestId("tasks-left");
  expect(tasksLeftElement).toHaveTextContent("You have 1 new task today");
});

test("plural text when more than one todo", () => {
  render(<Header useStore={getStoreWithNumTodos(2)} />);
  const tasksLeftElement = screen.getByTestId("tasks-left");
  expect(tasksLeftElement).toHaveTextContent("You have 2 new tasks today");
});

function getStoreWithNumTodos(numTodos: number) {
  return create<AppState>((set) => ({
    todos: new Array(numTodos).fill({ message: "todo", done: false }),
    setTodos: (todos) => set({ todos }),
    filter: "All",
    setFilter: (filter) => set({ filter }),
  }));
}

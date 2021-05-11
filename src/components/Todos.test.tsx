import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import create from "zustand";
import { AppState, Filter, Todo } from "../types";
import Todos from "./Todos";

test("not adding todo without a message ", () => {
  const useStore = createStore([], "All");
  render(<Todos useStore={useStore} />);
  const addButton = screen.getByTestId("addTodo");
  const container = screen.getByTestId("container");
  addButton.click();
  const result = container.children.length;
  expect(result).toStrictEqual(0);
});

test("adding todo with a message and clear input", () => {
  const useStore = createStore([], "All");
  render(<Todos useStore={useStore} />);
  const addButton = screen.getByTestId("addTodo");
  const input = screen.getByTestId("input");
  const container = screen.getByTestId("container");
  userEvent.type(input, "foo");
  addButton.click();
  expect(container.children.length).toStrictEqual(1);
  expect(input).toHaveValue("");
});

test("filter active todo messages", () => {
  const useStore = createStore(
    [
      { done: true, message: "foo" },
      { done: false, message: "foo" },
      { done: false, message: "foo" },
    ],
    "Active"
  );
  render(<Todos useStore={useStore} />);
  const container = screen.getByTestId("container");
  expect(container.children.length).toStrictEqual(2);
});

test("filter done todo messages", () => {
  const useStore = createStore(
    [
      { done: true, message: "foo" },
      { done: false, message: "foo" },
      { done: false, message: "foo" },
    ],
    "Done"
  );
  render(<Todos useStore={useStore} />);
  const container = screen.getByTestId("container");
  expect(container.children.length).toStrictEqual(1);
});

function createStore(todos: Todo[], filter: Filter) {
  return create<AppState>((set) => ({
    todos,
    setTodos: (todos) => set({ todos }),
    filter,
    setFilter: (filter) => set({ filter }),
  }));
}

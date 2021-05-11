import React from "react";
import create from "zustand";
import { persist } from "zustand/middleware";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todos from "./components/Todos";
import { AppState } from "./types";

const useStore = create<AppState>(
  persist(
    (set) => ({
      todos: [],
      setTodos: (todos) => set({ todos }),
      filter: "All",
      setFilter: (filter) => set({ filter }),
    }),
    { name: "todos" }
  )
);

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <Header useStore={useStore} />
      <Todos useStore={useStore} />
      <Footer useStore={useStore} />
    </div>
  );
}

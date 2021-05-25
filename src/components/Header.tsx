import React from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/solid";
import { UseStore } from "zustand";
import { AppState } from "../types";

type Props = {
  useStore: UseStore<AppState>;
};

export default function Header(props: Props) {
  const { todos } = props.useStore();
  const notDoneTodos = todos.filter((todo) => !todo.done);

  return (
    <header className="flex flex-col items-center mt-8">
      <p className="text-green-300 text-3xl font-black mx-4 px-2">
        Welcome back!
      </p>

      <p className="text-indigo-300" data-testid="tasks-left">
        You have {notDoneTodos.length} new task
        {notDoneTodos.length !== 1 && "s"} today
      </p>

      <ChevronDoubleDownIcon className="animate-bounce w-6 h-6 text-indigo-300 my-4" />
    </header>
  );
}

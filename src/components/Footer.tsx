import React from "react";
import { CloudIcon } from "@heroicons/react/solid";
import { UseStore } from "zustand";
import { AppState, Filter } from "../types";

type Props = {
  useStore: UseStore<AppState>;
};

export default function Footer(props: Props) {
  const { filter, setFilter } = props.useStore();

  return (
    <footer className="flex flex-row justify-center my-8 gap-8">
      <FilterButton value="All" selectedValue={filter} setValue={setFilter} />
      <FilterButton
        value="Active"
        selectedValue={filter}
        setValue={setFilter}
      />
      <FilterButton value="Done" selectedValue={filter} setValue={setFilter} />
    </footer>
  );
}

type FilterButtonProps = {
  value: Filter;
  selectedValue: Filter;
  setValue: (value: Filter) => void;
};

function FilterButton({ value, selectedValue, setValue }: FilterButtonProps) {
  return (
    <button
      onClick={() => setValue(value)}
      className={`
        flex
        flex-col
        items-center
        w-20
        focus:outline-none
        rounded-full
        border-2
        border-dashed
        ${value === selectedValue ? "border-indigo-300" : "border-transparent"}
      `}
    >
      <CloudIcon className="w-6 h-6 text-indigo-300" />
      <p className="text-green-200 font-black text-sm">{value}</p>
    </button>
  );
}

export type Todo = {
  done: boolean;
  message: string;
};

export type Filter = "All" | "Active" | "Done";

export type AppState = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

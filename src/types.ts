export type Person = {
  name: string;
  age: number;
};
export type TodoItemType = {
  _id: string;
  name: string;
  checked: boolean;
};

export type TodoFunction = (id: string) => void;
export type TodoHandler = (e: React.FormEvent) => void;

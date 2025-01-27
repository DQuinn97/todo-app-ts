import { type TodoItemType, type TodoFunction } from "../types";

type Props = {
  todo: TodoItemType;
  updateTodo: TodoFunction;
  removeTodo: TodoFunction;
};
const TodoItem = ({ todo, updateTodo, removeTodo }: Props) => {
  return (
    <>
      <li id={todo._id} className={todo.checked ? "checked" : ""}>
        <span>{todo.name}</span>
        <a
          href="#"
          className="check"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            updateTodo(todo._id);
          }}
        ></a>
        <a
          href="#"
          className="remove"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            removeTodo(todo._id);
          }}
        ></a>
      </li>
    </>
  );
};
export default TodoItem;

import type { TodoItemType, TodoFunction } from "../types";
import TodoItem from "./TodoItem";
type Props = {
  todos: TodoItemType[];
  removeTodo: TodoFunction;
  updateTodo: TodoFunction;
};
const TodoList = ({ todos, removeTodo, updateTodo }: Props) => {
  return (
    <ul>
      {todos.map((todo: TodoItemType) => (
        <>
          <TodoItem
            todo={todo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        </>
      ))}
    </ul>
  );
};
export default TodoList;

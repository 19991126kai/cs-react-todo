import { Todo } from "../types/todo";
import { TodoItem } from "./TodoItem";

type Props = {
  todos: Todo[];
};

export const TodoList = ({ todos }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>タイトル</th>
          <th>状況</th>
          <th>予定日</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </tbody>
    </table>
  );
};

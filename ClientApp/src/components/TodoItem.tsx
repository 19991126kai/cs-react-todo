import { Todo } from "../types/todo";

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  return (
    <tr>
      <th>{todo.title}</th>
      <th>{todo.isCompleted ? "完了" : "未完了"}</th>
      <th>{new Date(todo.deadline).toLocaleDateString("ja-JP")}</th>
    </tr>
  );
};

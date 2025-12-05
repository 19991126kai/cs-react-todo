import { Todo } from "../types/todo";
import { TodoItem } from "./TodoItem";

type Props = {
  todos: Todo[];
};

export const TodoList = ({ todos }: Props) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-50 text-left">
          <tr className="text-center">
            <th className="px-4 py-3">タイトル</th>
            <th className="px-4 py-3">予定日</th>
            <th className="px-4 py-3">状況</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

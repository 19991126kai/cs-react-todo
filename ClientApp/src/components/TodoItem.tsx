import { Todo } from "../types/todo";

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-4 py-3 text-left">{todo.title}</td>
      <td className="px-4 py-3 text-center text-slate-600">
        {new Date(todo.deadline).toLocaleDateString("ja-JP")}
      </td>
      <td className="px-4 py-3 text-center">
        <span
          className={`inline-flex w-16 justify-center rounded-full py-0.5 text-xs font-semibold ${
            todo.isCompleted
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {todo.isCompleted ? "完了" : "未完了"}
        </span>
      </td>
    </tr>
  );
};

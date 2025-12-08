import { Todo } from "../types/todo";

type Props = {
  todo: Todo;
};

export const TodoDetail = ({ todo }: Props) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      <div className="space-y-2 text-sm text-gray-700">
        <p className="font-bold text-lg">{todo.title}</p>
        <p>
          <span className="font-semibold">状況: </span>
          <span
            className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
              todo.isCompleted
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {todo.isCompleted ? "完了" : "未完了"}
          </span>
        </p>
        <p>
          <span className="font-semibold">期限: </span>
          {new Date(todo.deadline).toLocaleDateString("ja-JP")}
        </p>
        <p>
          <span className="font-semibold">作成日: </span>
          {new Date(todo.createdAt).toLocaleString("ja-JP")}
        </p>
        <p>
          <span className="font-semibold">更新日: </span>
          {new Date(todo.updatedAt).toLocaleString("ja-JP")}
        </p>
      </div>
    </div>
  );
};

import { Todo } from "../types/todo";

type Props = {
  todo: Todo;
};

export const TodoDetail = ({ todo }: Props) => {
  return (
    <div className="px-3 mx-auto space-y-4">
      <div>
        <label className="font-semibold mb-1">タイトル</label>
        <div className="m-2">{todo.title}</div>
      </div>

      <div>
        <label className="font-semibold mb-1">状況</label>
        <div
          className={`m-2 w-16 text-center rounded-full py-0.5 text-xs font-semibold ${
            todo.isCompleted
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {todo.isCompleted ? "完了" : "未完了"}
        </div>
      </div>

      <div>
        <label className="font-semibold mb-1">予定日</label>
        <div className="m-2">
          {new Date(todo.deadline).toLocaleDateString("ja-JP")}
        </div>
      </div>

      <div>
        <label className="font-semibold mb-1">作成日</label>
        <div className="m-2">
          {new Date(todo.createdAt).toLocaleString("ja-JP")}
        </div>
      </div>

      <div>
        <label className="font-semibold mb-1">更新日</label>
        <div className="m-2">
          {new Date(todo.updatedAt).toLocaleString("ja-JP")}
        </div>
      </div>
    </div>
  );
};

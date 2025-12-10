import { useState } from "react";
import { Todo } from "../types/todo";

type Props = {
  onSubmit: (todo: Omit<Todo, "id" | "createdAt" | "updatedAt">) => void;
  initialValue?: Omit<Todo, "id" | "createdAt" | "updatedAt">;
};

export const TodoForm = ({ onSubmit, initialValue }: Props) => {
  const [title, setTitle] = useState(initialValue?.title ?? "");
  const [deadline, setDeadline] = useState(
    initialValue?.deadline.split("T")[0] ?? ""
  );
  const [isCompleted, setIsCompleted] = useState(
    initialValue?.isCompleted ?? false
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, deadline, isCompleted });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <label className="block text-sm font-bold">タイトル</label>
        <input
          className="w-full rounded border p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-bold"></label>
        <input
          type="date"
          className="w-full rounded border p-2"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
            className="mr-2"
          />
          完了
        </label>
      </div>
      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        保存
      </button>
    </form>
  );
};

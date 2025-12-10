import { Todo } from "../types/todo";

export const updateTodo = async (
  id: number,
  todo: Omit<Todo, "id" | "createdAt" | "updatedAt">
) => {
  const res = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, ...todo }),
  });
  if (!res.ok) throw new Error("TODOの更新に失敗しました");
};

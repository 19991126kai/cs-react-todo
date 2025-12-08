import { Todo } from "../types/todo";

export const createTodo = async (
  todo: Omit<Todo, "id" | "createdAt" | "updatedAt">
) => {
  const response = await fetch("/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error("TODOの作成に失敗しました");
  return response.json();
};

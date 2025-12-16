export const fetchTodoById = async (id: number) => {
  const response = await fetch(`/api/todos/${id}`);
  if (!response.ok) throw new Error("データ取得に失敗しました");
  return response.json();
};

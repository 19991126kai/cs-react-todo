export const fetchTodos = async () => {
  const response = await fetch("/api/todos");
  if (!response.ok) throw new Error("データ取得に失敗しました");
  return response.json();
};

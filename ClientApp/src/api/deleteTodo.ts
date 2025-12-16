export const deleteTodo = async (id: number) => {
  const response = await fetch(`/api/todos/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("TODOの削除に失敗しました");
};

import { useEffect, useState } from "react";
import { fetchTodos } from "../api/get-todos";
import { Todo } from "../types/todo";
import { TodoList } from "../components/TodoList";

export const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTodos()
      .then(setTodos)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>エラー: {error}</p>;

  return (
    <div>
      <h2>TODO一覧</h2>
      <TodoList todos={todos} />
    </div>
  );
};

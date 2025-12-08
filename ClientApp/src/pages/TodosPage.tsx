import { useEffect, useState } from "react";
import { fetchTodos } from "../api/get-todos";
import { Todo } from "../types/todo";
import { TodoList } from "../components/TodoList";
import { Link } from "react-router-dom";

export const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTodos()
      .then((data) => {
        // sort()は破壊的メソッドだが、APIから取得したその場限りのデータを破壊したところで影響はない
        const sorted = data.sort(
          (a: { id: number }, b: { id: number }) => b.id - a.id
        );
        setTodos(sorted);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>エラー: {error}</p>;

  return (
    <div>
      <h2>TODO一覧</h2>
      <button className="rounded bg-blue-600 px-4 py-2 my-2 text-white hover:bg-blue-700 text-sm">
        <Link to="/todos/new">新規作成</Link>
      </button>
      <TodoList todos={todos} />
    </div>
  );
};

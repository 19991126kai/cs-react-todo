import { useEffect, useState } from "react";
import { fetchTodos } from "../api/fetchTodos";
import { Todo } from "../types/todo";
import { TodoList } from "../components/TodoList";
import { Link } from "react-router-dom";
import { TodoFilter } from "../components/TodoFilterButton";

export const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">(
    "all"
  );
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

  // filter()は非破壊的メソッドなので、そのまま使って問題ない
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.isCompleted;
    if (filter === "incomplete") return !todo.isCompleted;
    return true;
  });

  if (error) return <p>エラー: {error}</p>;

  return (
    <div>
      <h2 className="text-lg font-bold">TODO一覧</h2>
      <button className="rounded bg-blue-600 px-4 py-2 my-2 text-white hover:bg-blue-700 text-sm">
        <Link to="/todos/new">新規作成</Link>
      </button>
      <TodoFilter filter={filter} onChange={setFilter} />
      <TodoList todos={filteredTodos} />
    </div>
  );
};

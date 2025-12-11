import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTodoById } from "../api/get-todo";
import { Todo } from "../types/todo";
import { TodoDetail } from "../components/TodoDetail";
import { deleteTodo } from "../api/delete-todo";

export const TodoDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [todo, setTodo] = useState<Todo | null>(null);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchTodoById(Number(id))
        .then(setTodo)
        .catch((err) => setError(err.message));
    }
  }, [id]);

  const handleDelete = async () => {
    if (!id) return;
    const confirmDelete = window.confirm("本当に削除しますか？");
    if (!confirmDelete) return;

    try {
      await deleteTodo(Number(id));
      navigate("/");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  if (error) return <p>Error: {error}</p>;
  if (!todo) return <p>Loading...</p>;

  return (
    <div>
      <h2>TODO詳細</h2>
      <TodoDetail todo={todo} />
      <div className="flex gap-4 mt-6">
        <button className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 text-sm">
          <Link to={`/todos/${todo.id}/edit`}>編集</Link>
        </button>
        <button
          onClick={handleDelete}
          className="rounded bg-red-600 px-6 py-2 text-white hover:bg-red-700 text-sm"
        >
          削除
        </button>
      </div>
    </div>
  );
};

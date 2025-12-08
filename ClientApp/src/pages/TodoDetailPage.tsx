import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTodoById } from "../api/get-todo";
import { Todo } from "../types/todo";
import { TodoDetail } from "../components/TodoDetail";

export const TodoDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [todo, setTodo] = useState<Todo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchTodoById(Number(id))
        .then(setTodo)
        .catch((err) => setError(err.message));
    }
  }, [id]);

  if (error) return <p>Error: {error}</p>;
  if (!todo) return <p>Loading...</p>;

  return (
    <div>
      <h2>TODO詳細</h2>
      <TodoDetail todo={todo} />
    </div>
  );
};

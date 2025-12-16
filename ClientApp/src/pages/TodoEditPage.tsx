import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTodoById } from "../api/get-todo";
import { updateTodo } from "../api/update-todo";
import { Todo } from "../types/todo";
import { TodoForm } from "../components/TodoForm";

export const TodoEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<Todo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchTodoById(Number(id))
        .then(setTodo)
        .catch((err) => setError(err.message));
    }
  }, [id]);

  const handleSubmit = (
    updated: Omit<Todo, "id" | "createdAt" | "updatedAt">
  ) => {
    if (!id) return;
    updateTodo(Number(id), updated)
      .then(() => navigate(`/todos/${id}`))
      .catch((err) => setError(err.message));
  };

  if (error) return <p>Error: {error}</p>;
  if (!todo) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-lg font-bold mb-4 pb-3 border-b">TODO編集</h2>
        <TodoForm onSubmit={handleSubmit} initialValue={todo} />
      </div>
    </div>
  );
};

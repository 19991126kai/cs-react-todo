import { useNavigate } from "react-router-dom";
import { TodoForm } from "../components/TodoForm";
import { createTodo } from "../api/createTodo";

export const TodoCreatePage = () => {
  const navigate = useNavigate();

  const handleCreate = async (todoData: Parameters<typeof createTodo>[0]) => {
    await createTodo(todoData);
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-lg font-bold mb-4 pb-3 border-b">TODO作成</h2>
      <TodoForm onSubmit={handleCreate} />
    </div>
  );
};

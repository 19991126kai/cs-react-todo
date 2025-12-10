import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { TodosPage } from "./pages/TodosPage";
import { TodoDetailPage } from "./pages/TodoDetailPage";
import { TodoCreatePage } from "./pages/TodoCreatePage";
import { TodoEditPage } from "./pages/TodoEditPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <main className="mx-auto max-w-5xl px-4 py-6">
          <Routes>
            <Route path="/" element={<TodosPage />} />
            <Route path="/todos/:id" element={<TodoDetailPage />} />
            <Route path="/todos/new" element={<TodoCreatePage />} />
            <Route path="/todos/:id/edit" element={<TodoEditPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

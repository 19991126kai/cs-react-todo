import { Header } from "./components/Header";
import { TodosPage } from "./pages/TodosPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-6">
        <TodosPage />
      </main>
    </div>
  );
}

export default App;

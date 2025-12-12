type Props = {
  filter: "all" | "completed" | "incomplete";
  onChange: (value: "all" | "completed" | "incomplete") => void;
};

export const TodoFilter = ({ filter, onChange }: Props) => {
  const baseClass =
    "px-3 py-1 rounded text-sm font-medium border transition-colors";
  const activeClass = "bg-blue-400 text-white";
  const inactiveClass = "bg-white text-gray-600 hover:bg-gray-100";

  return (
    <div className="flex gap-2 mb-4">
      フィルター：
      <button
        onClick={() => onChange("all")}
        className={`${baseClass} ${
          filter === "all" ? activeClass : inactiveClass
        }`}
      >
        すべて
      </button>
      <button
        onClick={() => onChange("incomplete")}
        className={`${baseClass} ${
          filter === "incomplete" ? activeClass : inactiveClass
        }`}
      >
        未完了
      </button>
      <button
        onClick={() => onChange("completed")}
        className={`${baseClass} ${
          filter === "completed" ? activeClass : inactiveClass
        }`}
      >
        完了
      </button>
    </div>
  );
};

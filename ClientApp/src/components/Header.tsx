import React from "react";

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-5 sm:px-6">
        <span className="material-symbols-outlined">list_alt_check</span>
        <div>
          <h1 className="text-xl font-semibold">TODO App</h1>
        </div>
      </div>
    </header>
  );
};

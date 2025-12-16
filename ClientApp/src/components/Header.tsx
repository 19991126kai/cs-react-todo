import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-5 sm:px-6">
        <span className="material-symbols-outlined">list_alt_check</span>
        <div>
          <Link className="h1 text-xl font-semibold py-3" to={`/`}>
            TODO App
          </Link>
        </div>
      </div>
    </header>
  );
};

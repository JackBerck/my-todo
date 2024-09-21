import React from "react";

export default function SearchTodo({ onSearch }) {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    onSearch(searchValue);
  };

  return (
    <form action="" className="w-8/12">
      <div className="relative text-sm md:text-base">
        <input
          type="text"
          id="todo_search"
          name="todo_search"
          className="peer bg-transparent h-10 w-full rounded-lg text-dark-base placeholder-transparent ring-2 px-2 ring-dark-base focus:ring-purple-base focus:outline-none"
          placeholder=""
          onChange={handleSearch}
        />
        <label
          htmlFor="todo_search"
          className="absolute cursor-text left-2 -top-3 text-sm text-dark-base bg-white-base mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-dark-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-purple-base peer-focus:text-sm transition-all z-10"
        >
          Cari catatan...
        </label>
      </div>
    </form>
  );
}

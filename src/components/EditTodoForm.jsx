import React, { useState } from "react";

export default function EditTodoForm({
  todo,
  handleEditTodo,
  handleCloseEdit,
}) {
  const [title, setTitle] = useState(todo.title);
  const [body, setBody] = useState(todo.body);
  const maxTitleLength = 50;

  const handleTitleChange = (event) => {
    if (event.target.value.length <= maxTitleLength) {
      setTitle(event.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditTodo(todo.id, { title, body });
  };

  return (
    <div
      tabIndex="-1"
      aria-hidden="false"
      className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-xl max-h-full">
        <div className="relative bg-white-base rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">
              Edit Catatan
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={handleCloseEdit}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-4 md:p-5 space-y-4">
            <div className="relative">
              <input
                type="text"
                id="todo_title"
                name="todo_title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="peer bg-transparent h-10 w-full rounded-lg text-dark-base placeholder-transparent ring-2 px-2 ring-dark-base focus:ring-purple-base focus:outline-none"
              />
              <label
                htmlFor="todo_title"
                className="absolute cursor-text left-2 -top-3 text-sm text-dark-base bg-white-base mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-dark-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-purple-base peer-focus:text-sm transition-all z-10"
              >
                Masukkan judul catatan...
              </label>
              <p className="text-sm text-gray-500">
                {maxTitleLength - title.length} karakter tersisa
              </p>
            </div>
            <div className="relative">
              <textarea
                id="todo_body"
                name="todo_body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="peer bg-transparent h-16 w-full rounded-lg text-dark-base placeholder-transparent ring-2 px-2 ring-dark-base focus:ring-purple-base focus:outline-none"
              />
              <label
                htmlFor="todo_body"
                className="absolute cursor-text left-2 -top-3 text-sm text-dark-base bg-white-base mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-dark-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-purple-base peer-focus:text-sm transition-all z-10"
              >
                Masukkan deskripsi catatan...
              </label>
            </div>
            <button
              type="submit"
              className="bg-purple-base text-white-base px-4 py-2 text-sm rounded-md"
            >
              Simpan Perubahan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

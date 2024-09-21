import React, { useState } from "react";

export default function ArchivedTodo({
  archivedTodos,
  handleDeleteTodo,
  handleUnarchiveTodo,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <button
        onClick={toggleModal}
        className="block text-purple-base focus:outline-none font-medium text-sm underline"
        type="button"
      >
        Cek catatan yang diarsipkan
      </button>

      {isModalOpen && (
        <div
          tabIndex="-1"
          aria-hidden={!isModalOpen}
          className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-xl max-h-full">
            <div className="relative bg-white-base rounded-lg shadow">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900 ">
                  Catatan yang diarsipkan
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={toggleModal}
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
              <div className="p-4">
                {archivedTodos.length === 0 && (
                  <p className="text-center text-lg font-bold p-4">
                    Tidak ada catatan yang diarsipkan
                  </p>
                )}
                {archivedTodos.length !== 0 &&
                  archivedTodos.map((todo) => (
                    <div
                      className="border-b-2 border-b-purple-base pb-2 p-1 text-justify"
                      key={todo.id}
                    >
                      <h2 className="text-lg font-bold">{todo.title}</h2>
                      <p>{todo.description}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          type="button"
                          name="delete"
                          className="bg-red-500 text-white-base px-3 py-2 text-sm rounded-md"
                          onClick={() => handleDeleteTodo(todo.id)}
                        >
                          Hapus
                        </button>
                        <button
                          type="button"
                          name="restore"
                          className="bg-green-500 text-white-base px-3 py-2 text-sm rounded-md"
                          onClick={() => handleUnarchiveTodo(todo.id)}
                        >
                          Kembalikan
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

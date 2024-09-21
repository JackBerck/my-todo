import React from "react";

export default function TodoList({
  todos,
  handleDeleteTodo,
  handleArchiveTodo,
}) {
  return (
    <div className="flex flex-col gap-4 border-2 rounded-md border-dark-base p-2 mt-4">
      {todos.length === 0 && (
        <p className="text-center text-lg font-bold">Tidak ada catatan</p>
      )}
      {todos.length !== 0 &&
        todos.map(
          (todo) =>
            todo.archived === false && (
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
                    name="archive"
                    className="bg-green-500 text-white-base px-3 py-2 text-sm rounded-md"
                    onClick={() => handleArchiveTodo(todo.id)}
                  >
                    Arsipkan
                  </button>
                </div>
              </div>
            )
        )}
    </div>
  );
}

import React from "react";

export default function TodoList({
  todos,
  handleDeleteTodo,
  handleArchiveTodo,
  handleOpenEdit,
}) {
  return (
    <>
      {todos.length === 0 && (
        <p className="mt-8 text-center text-lg md:text-3xl font-bold">
          Tidak ada catatan
        </p>
      )}
      <div className="max-w-screen-xl rounded-md p-2 mt-4 mx-auto flex flex-wrap gap-8 justify-between">
        {todos.length !== 0 &&
          todos.map(
            (todo) =>
              todo.archived === false && (
                <div
                  className="flex-auto max-w-sm border-b-2 p-4 pt-7 text-justify flex flex-col relative shadow-xl rounded-md"
                  key={todo.id}
                >
                  <small className="absolute top-4 right-4 text-xs">
                    {todo.createAt}
                  </small>
                  <h2 className="text-lg font-bold">{todo.title}</h2>
                  <p>{todo.body}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      type="button"
                      name="edit"
                      className="bg-purple-base text-white-base px-3 py-2 text-sm rounded-md"
                      onClick={() => handleOpenEdit(todo)}
                    >
                      Edit
                    </button>
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
    </>
  );
}

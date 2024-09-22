import React, { useState } from "react";

export default function AddTodoForm({ addTodo }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const maxTitleLength = 50;

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleTitleChange = (event) => {
    if (event.target.value.length <= maxTitleLength) {
      setTitle(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    event.preventDefault();
    try {
      const form = event.target;
      const isChecked = form.elements.todo_archive.checked;
      const todo = {
        id: +new Date(),
        title: form.elements.todo_title.value,
        body: form.elements.todo_body.value,
        archived: isChecked,
        // createdAt: new Date().toLocaleDateString("id-ID", options),
        createdAt: new Date().toISOString(),
      };

      addTodo(todo);
      setTitle("");
      toggleModal();
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="block text-white-base bg-purple-base focus:outline-none font-medium rounded-lg md:px-2 md:py-2.5 text-center text-sm"
        type="button"
      >
        Add new todo
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
                  Add new todo
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
              <form onSubmit={handleSubmit} className="p-4 md:p-5 space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    id="todo_title"
                    name="todo_title"
                    value={title}
                    onChange={handleTitleChange}
                    className="peer bg-transparent h-10 w-full rounded-lg text-dark-base placeholder-transparent ring-2 px-2 ring-dark-base focus:ring-purple-base focus:outline-none"
                    placeholder=""
                    required
                  />
                  <label
                    htmlFor="todo_title"
                    className="absolute cursor-text left-2 -top-3 text-sm text-dark-base bg-white-base mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-dark-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-purple-base peer-focus:text-sm transition-all z-10"
                  >
                    Input todo title...
                  </label>
                  <p className="text-sm text-gray-500">
                    {maxTitleLength - title.length} characters left
                  </p>
                </div>
                <div className="relative">
                  <textarea
                    type="text"
                    id="todo_body"
                    name="todo_body"
                    className="peer bg-transparent h-16 w-full rounded-lg text-dark-base placeholder-transparent ring-2 px-2 ring-dark-base focus:ring-purple-base focus:outline-none pt-1"
                    placeholder=""
                    required
                  />
                  <label
                    htmlFor="todo_body"
                    className="absolute cursor-text left-2 -top-3 text-sm text-dark-base bg-white-base mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-dark-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-purple-base peer-focus:text-sm transition-all"
                  >
                    Input todo description...
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="todo_archive"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-purple-base border-dark-base rounded"
                  />
                  <label
                    htmlFor="todo_archive"
                    className="ms-2 text-sm font-medium text-dark-base"
                  >
                    Archive this todo?
                  </label>
                </div>
                <button
                  type="submit"
                  className="text-white-base bg-purple-base hover:bg-purple-base font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Add todo
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

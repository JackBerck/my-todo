import React from "react";
import AddTodoForm from "./AddTodoForm";
import SearchTodo from "./SearchTodo";
import ArchivedTodo from "./ArchivedTodo";

export default function TodoTitle({
  handleSearch,
  handleAddTodo,
  archivedTodos,
  handleDeleteTodo,
  handleUnarchiveTodo,
}) {
  return (
    <>
      <div className="flex items-center gap-4 mb-2">
        <SearchTodo onSearch={handleSearch} />
        <AddTodoForm addTodo={handleAddTodo} />
      </div>
      <ArchivedTodo
        archivedTodos={archivedTodos}
        handleDeleteTodo={handleDeleteTodo}
        handleUnarchiveTodo={handleUnarchiveTodo}
      />
    </>
  );
}

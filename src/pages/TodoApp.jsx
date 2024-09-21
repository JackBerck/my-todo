import React, { useState } from "react";
import TodoTitle from "../components/TodoTitle";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
import EditTodoForm from "../components/EditTodoForm";

export default function App() {
  const [searchValue, setSearchValue] = useState(""); // State untuk menyimpan nilai search
  const [todos, setTodos] = useState([]); // State untuk menyimpan data todo
  const [isEditing, setIsEditing] = useState(false); // State untuk mengecek apakah sedang dalam mode edit
  const [editTodo, setEditTodo] = useState({}); // State untuk menyimpan data todo yang akan diedit

  // handleSearch berfungsi untuk mengubah nilai searchValue sesuai dengan input yang dimasukkan oleh pengguna.
  const handleSearch = (value) => {
    setSearchValue(value);
  };

  // handleAddTodo berfungsi untuk menambahkan data todo baru ke dalam state todos.
  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
    console.log(todos);
  };

  // handleDelete berfungsi untuk menghapus data todo dari state todos berdasarkan id.
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // handleArchive berfungsi untuk mengarsipkan data todo dari state todos berdasarkan id.
  const handleArchiveTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            archived: true,
          };
        }
        return todo;
      })
    );
  };

  // handleUnarchive berfungsi untuk mengembalikan data todo dari arsip ke dalam state todos berdasarkan id.
  const handleUnarchiveTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            archived: false,
          };
        }
        return todo;
      })
    );
  };

  // handleEditTodo berfungsi untuk mengubah data todo dari state todos berdasarkan id.
  const handleEditTodo = (id, updatedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              title: updatedTodo.title,
              body: updatedTodo.body,
            }
          : todo
      )
    );
    setIsEditing(false);
  };

  const handleOpenEdit = (todo) => {
    setEditTodo(todo);
    setIsEditing(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  // filteredTodos berfungsi untuk menyaring data todos berdasarkan nilai searchValue.
  const filteredTodos = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  const archivedTodos = todos.filter((todo) => {
    return todo.archived;
  });

  // Gunakan localStorage sebagai alternatif
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  React.useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <>
      <div className="max-w-screen-sm mx-auto px-4 py-4 md:px-12 md:py-12 md:shadow-lg mt-24">
        <Title>Catatan Harian</Title>
        <TodoTitle
          handleSearch={handleSearch}
          handleAddTodo={handleAddTodo}
          archivedTodos={archivedTodos}
          handleDeleteTodo={handleDeleteTodo}
          handleUnarchiveTodo={handleUnarchiveTodo}
        />
      </div>
      <TodoList
        todos={filteredTodos}
        handleArchiveTodo={handleArchiveTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleOpenEdit={handleOpenEdit}
      />
      {isEditing && (
        <EditTodoForm
          todo={editTodo}
          handleEditTodo={handleEditTodo}
          handleCloseEdit={handleCloseEdit}
        />
      )}
    </>
  );
}

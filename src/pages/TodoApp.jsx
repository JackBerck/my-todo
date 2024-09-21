import React, { useState } from "react";
import TodoTitle from "../components/TodoTitle";
import Title from "../components/Title";
import TodoList from "../components/TodoList";

export default function App() {
  const [searchValue, setSearchValue] = useState(""); // State untuk menyimpan nilai search
  const [todos, setTodos] = useState([]); // State untuk menyimpan data todo

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

  // filteredTodos berfungsi untuk menyaring data todos berdasarkan nilai searchValue.
  const filteredTodos = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  const archivedTodos = todos.filter((todo) => {
    return todo.archived;
  });

  // useEffect berfungsi untuk menyimpan data todos ke dalam sessionStorage setiap kali terjadi perubahan pada state todos.
  React.useEffect(() => {
    sessionStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // useEffect berfungsi untuk mengambil data todos dari sessionStorage saat aplikasi pertama kali dijalankan.
  React.useEffect(() => {
    const storedTodos = sessionStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <div className="max-w-screen-sm mx-auto px-12 py-12 shadow-lg bg-white-base mt-24">
      <Title>Catatan Harian</Title>
      <TodoTitle
        handleSearch={handleSearch}
        handleAddTodo={handleAddTodo}
        archivedTodos={archivedTodos}
        handleDeleteTodo={handleDeleteTodo}
        handleUnarchiveTodo={handleUnarchiveTodo}
      />
      <TodoList
        todos={filteredTodos}
        handleArchiveTodo={handleArchiveTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

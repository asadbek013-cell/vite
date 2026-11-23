import Gif from "./Gif";
import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [animationMode, setAnimationMode] = useState(false);

  function addTodo(e) {
    e.preventDefault();

    if (input.trim() === "") return;

    if (editId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId
            ? { ...todo, title: input }
            : todo
        )
      );

      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        title: input,
        completed: false,
      };

      setTodos([...todos, newTodo]);
    }

    setInput("");
  }

  function completeTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function updateTodo(todo) {
    setInput(todo.title);
    setEditId(todo.id);
  }

  return (
    
    <div className="container">
      <Gif animationMode={animationMode} />
      <div className="form-container">
        <h1 className="text-center text-5xl text-blue-500 font-black">
          To do List
        </h1>

        
        <form className="form" onSubmit={addTodo}>
  <label className="cir-search">
    <svg
      className="cir-search__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.34-4.34"></path>
    </svg>

    <input
      className="cir-search__field"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      type="text"
      placeholder="Enter your tasks..."
    />

    <kbd className="cir-search__kbd">TASK</kbd>
  </label>

 <button className="add-btn" type="submit">
  {editId !== null ? "Update" : "Add"}
</button>
</form>
<div className="flex items-center justify-end gap-3 mb-4">
  <span className="text-white">
    {animationMode ? "Animation 2" : "Animation 1"}
  </span>

  <label className="switch">
    <input
      type="checkbox"
      checked={animationMode}
      onChange={(e) => setAnimationMode(e.target.checked)}
    />
    <span className="slider"></span>
  </label>
</div>
      </div>

      <ul className="flex items-center flex-wrap gap-2">
        {todos.map((todo) => (
      <li
  key={todo.id}
  className="w-[250px] min-h-[140px] p-5 rounded-2xl
  bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900
  border border-purple-400/30
  shadow-xl shadow-purple-900/30
  hover:shadow-purple-500/30
  hover:-translate-y-2
  transition-all duration-300
  text-white text-center"
>
            <span
              onClick={() => completeTodo(todo.id)}
              className={todo.completed ? "line-through" : ""}
            >
              {todo.title}
            </span>

            <div>
              {/* <button
                onClick={() => updateTodo(todo)}
                className="bg-green-600 px-2 py-1"
              >
                Edit
              </button> */}
              <button
  type="button"
  onClick={() => updateTodo(todo)}
  className="button"
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
    <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
  </svg>
  Edit
</button>
    <button
  type="button"
  onClick={() => deleteTodo(todo.id)}
  className="button"
  
><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
    <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
  </svg>
  Delete
</button>

              {/* <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-600 px-2 py-1"
              >
                Delete
              </button> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

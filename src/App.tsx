import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoService, { Todo } from "./services/TodoService";
import Logo from "./assets/images/logo.png";
import "./App.css";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const todos = TodoService.getTodos();
    setTodos(todos);
  }, []);

  useEffect(() => {
    TodoService.saveTodos(todos);
  }, [todos]);

  const handleAddTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <main className="app">
        <img src={Logo} alt="TodoList Logo" className="logo" />
        <h1>Lista de Tarefas</h1>

        <section className="todo-form">
          <TodoForm onAdd={handleAddTodo} />
        </section>

        <h2>Tarefas</h2>
        <section className="todo-list">
          <TodoList
            todos={todos}
            onRemove={handleRemoveTodo}
            onToggle={handleToggleTodo}
          />
        </section>
      </main>
    </>
  );
}

export default App;

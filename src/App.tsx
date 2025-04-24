import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoService, { Todo } from "./services/TodoService";

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
      <div className="app">
        <h1>Lista de Tarefas</h1>
        <TodoForm onAdd={handleAddTodo} />
        <h2 style={{ marginTop: "2rem", textAlign: "center" }}>Tarefas</h2>
        <TodoList
          todos={todos}
          onRemove={handleRemoveTodo}
          onToggle={handleToggleTodo}
        />
      </div>
    </>
  );
}

export default App;

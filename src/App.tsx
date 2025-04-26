import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoService, { Todo } from "./services/TodoService";
import Logo from "./assets/images/logo.png";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filtro, setFiltro] = useState<"todas" | "pendentes" | "concluidas">(
    "todas"
  );

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

  const handleEditTodo = (todoEditado: Todo) => {
    setTodos(
      todos.map((t) =>
        t.id === todoEditado.id
          ? { ...todoEditado, updatedAt: new Date().toISOString() }
          : t
      )
    );
  };

  const filtrarTarefas = () => {
    if (filtro === "pendentes") return todos.filter((todo) => !todo.completed);
    if (filtro === "concluidas") return todos.filter((todo) => todo.completed);
    return todos;
  };

  const pendentes = todos.filter((todo) => !todo.completed).length;
  const concluidas = todos.filter((todo) => todo.completed).length;

  return (
    <main className="app">
      <img src={Logo} alt="TodoList Logo" className="logo" />
      <h1>Lista de Tarefas</h1>

      <section className="todo-form">
        <TodoForm onAdd={handleAddTodo} />
      </section>
      <h2>Tarefas</h2>

      <div className="filtro-select">
        <label htmlFor="filtro">Filtrar:</label>
        <select
          id="filtro"
          value={filtro}
          onChange={(e) =>
            setFiltro(e.target.value as "todas" | "pendentes" | "concluidas")
          }
        >
          <option value="todas">Todas</option>
          <option value="pendentes">Pendentes</option>
          <option value="concluidas">Concluídas</option>
        </select>
      </div>

      <p className="contador">
        {pendentes} pendente(s) / {concluidas} concluída(s)
      </p>

      <section className="todo-list">
        <TodoList
          todos={filtrarTarefas()}
          onRemove={handleRemoveTodo}
          onEdit={handleEditTodo}
        />
      </section>
    </main>
  );
}

export default App;

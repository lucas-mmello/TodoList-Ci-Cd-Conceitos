import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Logo from "./assets/images/logo.png";
import "./App.css";
import useTodos from "./hooks/useTodos";
import ThemeSwitch from "./components/ThemeSwitch";

function App() {
  const {
    addTodo,
    removeTodo,
    editTodo,
    filtrarTarefas,
    pendentes,
    concluidas,
    filtro,
    setFiltro,
  } = useTodos();

  const siteName = import.meta.env.VITE_SITE_NAME || "TodoList";
  const environment = import.meta.env.VITE_ENVIRONMENT || "development";

  console.log(`Rodando no site: ${siteName}`);
  console.log(`Rodando no ambiente: ${environment}`);

  return (
    <main className="app">
      <img src={Logo} alt="TodoList Logo" className="logo" />
      <ThemeSwitch />
      <h1>Lista de Tarefas</h1>

      <section className="todo-form">
        <TodoForm onAdd={addTodo} />
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
          onRemove={removeTodo}
          onEdit={editTodo}
        />
      </section>
    </main>
  );
}

export default App;

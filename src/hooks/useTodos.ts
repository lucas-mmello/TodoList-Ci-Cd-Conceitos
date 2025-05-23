import { useState, useEffect } from "react";
import { Todo } from "../services/TodoService";
import TodoService from "../services/TodoService";
import { ITodoRepository } from "../repositories/ITodoRepository";
import { preencherTodosSeNecessario } from "../utils/preencherTodosSeNecessario";

type Filtro = "todas" | "pendentes" | "concluidas";

export default function useTodos(
  repository: ITodoRepository = new TodoService()
) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filtro, setFiltro] = useState<Filtro>("todas");
  const habilitado: "true" | "false" = import.meta.env?.VITE_ENABLE_FAKE_TODOS;
  const minimo: number = Number(import.meta.env?.VITE_MINIMO_TAREFAS);
  useEffect(() => {
    const todosSalvos = repository.getTodos();
    setTodos(todosSalvos);
  }, []);

  useEffect(() => {
    repository.saveTodos(todos);
  }, [todos]);

  useEffect(() => {
    const todos = preencherTodosSeNecessario({ minimo, habilitado });
    if (todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (todoEditado: Todo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoEditado.id
          ? { ...todoEditado, updatedAt: new Date().toISOString() }
          : todo
      )
    );
  };

  const filtrosDisponiveis = {
    todas: (_todo: Todo) => true,
    pendentes: (todo: Todo) => !todo.completed,
    concluidas: (todo: Todo) => todo.completed,
  };

  const filtrarTarefas = () => {
    return todos.filter(filtrosDisponiveis[filtro]);
  };

  const pendentes = todos.filter((todo) => !todo.completed).length;
  const concluidas = todos.filter((todo) => todo.completed).length;

  return {
    todos,
    addTodo,
    removeTodo,
    editTodo,
    filtrarTarefas,
    pendentes,
    concluidas,
    filtro,
    setFiltro,
  };
}

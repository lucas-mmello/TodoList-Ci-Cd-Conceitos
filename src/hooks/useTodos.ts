import { useState, useEffect } from "react";
import { Todo } from "../services/TodoService";
import TodoService from "../services/TodoService";
import { ITodoRepository } from "../repositories/ITodoRepository";

type Filtro = "todas" | "pendentes" | "concluidas";

export default function useTodos(
  repository: ITodoRepository = new TodoService()
) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filtro, setFiltro] = useState<Filtro>("todas");

  useEffect(() => {
    const todosSalvos = repository.getTodos();
    setTodos(todosSalvos);
  }, []);

  useEffect(() => {
    repository.saveTodos(todos);
  }, [todos]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id: number) => {
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

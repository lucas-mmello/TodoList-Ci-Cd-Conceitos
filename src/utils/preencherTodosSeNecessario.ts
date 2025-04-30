import TodoService, { Todo } from "../services/TodoService";
import { TodoFactory } from "../factories/TodoFactory";
import { ITodoRepository } from "../repositories/ITodoRepository";

export function preencherTodosSeNecessario(config: {
  minimo: number;
  habilitado: "true" | "false";
}): Todo[] | [] {
  if (config.habilitado === "false") return [];

  const repository: ITodoRepository = new TodoService();
  const todos: Todo[] = repository.getTodos();

  if (todos.length < config.minimo) {
    const faltantes = config.minimo - todos.length;
    const novos = Array.from({ length: faltantes }, () =>
      TodoFactory.createFakeTodo()
    );
    const atualizados = [...todos, ...novos];

    repository.saveTodos(atualizados);
    console.log(`${faltantes} tarefas fake adicionadas automaticamente.`);

    return atualizados;
  }
  return [];
}

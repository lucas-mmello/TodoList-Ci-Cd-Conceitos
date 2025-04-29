import { Todo } from "../services/TodoService";

export interface ITodoRepository {
  getTodos(): Todo[];
  saveTodos(todos: Todo[]): void;
}

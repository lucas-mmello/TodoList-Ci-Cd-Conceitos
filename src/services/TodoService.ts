import { ITodoRepository } from "../repositories/ITodoRepository";

export interface Todo {
  id: number;
  title: string;
  description: string;
  text: string;
  completed: boolean;
  createdAt: string;
  updatedAt?: string;
}

export default class TodoService implements ITodoRepository {
  getTodos(): Todo[] {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  }

  saveTodos(todos: Todo[]): void {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}

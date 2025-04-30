import { ITodoRepository } from "../repositories/ITodoRepository";

export interface Todo {
  id: string; // era number
  title: string;
  description: string;
  text: string;
  completed: boolean;
  createdAt: string;
  updatedAt?: string;
  idApi?: number;
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

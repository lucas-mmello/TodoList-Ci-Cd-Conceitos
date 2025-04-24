export interface Todo {
  id: number;
  title: string;
  description: string;
  text: string;
  completed: boolean;
  // userId: number;
}

export default class TodoService {
  // async getTodos(): Promise<Todo[]> {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  //   return response.json();
  // }
  static getTodos(): Todo[] {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
  }

  static saveTodos(todos: Todo[]) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
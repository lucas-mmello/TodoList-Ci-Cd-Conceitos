import { Todo } from "./TodoService";
import { v4 as uuidv4 } from "uuid";

export default class TodoApiService {
  static async fetchTodos(limit = 5): Promise<Todo[]> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    const data = await response.json();

    return data.map((item: any) => ({
      id: uuidv4(),
      idApi: item.id,
      title: item.title,
      description: "Importado da API",
      text: "Texto gerado automaticamente",
      completed: item.completed,
      createdAt: new Date().toISOString(),
      updatedAt: undefined,
    }));
  }
}

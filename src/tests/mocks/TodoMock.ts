import { Todo } from "../../services/TodoService";
import { v4 as uuidv4 } from "uuid";

export default class TodoMock {
  getTodos(): Todo[] {
    return [
      {
        id: uuidv4(),
        title: "Todo 1",
        description: "Description 1",
        text: "Text 1",
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: uuidv4(),
        title: "Todo 2",
        description: "Description 2",
        text: "Text 2",
        completed: true,
        createdAt: new Date().toISOString(),
      },
    ];
  }
}

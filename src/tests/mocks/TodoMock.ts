import { Todo } from "../../services/TodoService";

export default class TodoMock {
  static getTodos(): Todo[] {
    return [
      {
        id: 1,
        title: "Todo 1",
        description: "Description 1",
        text: "Text 1",
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 2,
        title: "Todo 2",
        description: "Description 2",
        text: "Text 2",
        completed: true,
        createdAt: new Date().toISOString(),
      },
    ];
  }
}

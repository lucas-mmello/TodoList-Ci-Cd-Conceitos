import { Todo } from "../services/TodoService";
import fakeData from "../data/fakedata.json";
import { v4 as uuidv4 } from "uuid";
export class TodoFactory {
  // private static currentId = 1;

  static createFakeTodo(): Todo {
    const random = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

    return {
      id: uuidv4(),
      title: random(fakeData.titulos),
      description: random(fakeData.descricoes),
      text: random(fakeData.textos),
      completed: random(fakeData.completed),
      createdAt: new Date().toISOString(),
      updatedAt: undefined,
    };
  }
}

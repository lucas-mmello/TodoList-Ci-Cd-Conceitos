import { TodoFactory } from "../factories/TodoFactory";
import fakeData from "../data/fakedata.json";

describe("TodoFactory", () => {
  it("deve criar um todo com dados válidos e aleatórios", () => {
    const todo = TodoFactory.createFakeTodo();

    expect(typeof todo.id).toBe("string");
    expect(typeof todo.title).toBe("string");
    expect(fakeData.titulos).toContain(todo.title);
    expect(fakeData.descricoes).toContain(todo.description);
    expect(fakeData.textos).toContain(todo.text);
    expect(typeof todo.completed).toBe("boolean");
    expect(typeof todo.createdAt).toBe("string");
  });

  it("deve criar múltiplos todos com IDs únicos", () => {
    const todos = Array.from({ length: 10 }, () =>
      TodoFactory.createFakeTodo()
    );
    const ids = todos.map((t) => t.id);
    const idsUnicos = new Set(ids);

    expect(idsUnicos.size).toBe(todos.length);
  });
});

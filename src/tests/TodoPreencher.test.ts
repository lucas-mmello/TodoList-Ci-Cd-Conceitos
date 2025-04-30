import { preencherTodosSeNecessario } from "../utils/preencherTodosSeNecessario";
import { Todo } from "../services/TodoService";

beforeEach(() => {
  localStorage.clear();
});

describe("preencherTodosSeNecessario", () => {
  it("deve preencher com a quantidade correta de tarefas se estiver abaixo do mínimo", () => {
    const result = preencherTodosSeNecessario({
      habilitado: "true",
      minimo: 5,
    });

    expect(result.length).toBe(5);

    result.forEach((todo: Todo) => {
      expect(todo.id).toBeDefined();
      expect(todo.title).toBeDefined();
      expect(todo.createdAt).toBeDefined();
    });
  });

  it("não deve preencher se já houver tarefas suficientes", () => {
    preencherTodosSeNecessario({ habilitado: "true", minimo: 5 });
    const result = preencherTodosSeNecessario({
      habilitado: "true",
      minimo: 5,
    });
    expect(result).toEqual([]);
  });
});

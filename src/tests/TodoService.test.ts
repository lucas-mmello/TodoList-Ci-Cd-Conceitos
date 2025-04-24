import TodoService, { Todo } from "../services/TodoService";
import TodoMock from "./mocks/TodoMock";

describe("TodoService", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.restoreAllMocks();
  });

  it("deve retornar um array vazio se não houver dados no localStorage", () => {
    const todos = TodoService.getTodos();
    expect(todos).toEqual([]);
  });

  it("deve salvar e retornar um array de todos no localStorage", () => {
    const fakeTodos: Todo[] = TodoMock.getTodos();
    TodoService.saveTodos(fakeTodos);
    const todos = TodoService.getTodos();
    expect(todos).toEqual(fakeTodos);
  });

  it("deve chamar localStorage.setItem", () => {
    const setItemSpy = jest.spyOn(Storage.prototype, "setItem");
    const fakeTodos: Todo[] = TodoMock.getTodos();
    TodoService.saveTodos(fakeTodos);
    expect(setItemSpy).toHaveBeenCalledWith("todos", JSON.stringify(fakeTodos));
  });
});

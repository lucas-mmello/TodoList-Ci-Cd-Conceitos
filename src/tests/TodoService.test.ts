import { Todo } from "../services/TodoService";

describe("TodoService", () => {
  it("deve retornar um array vazio se não houver dados no localStorage", () => {
    const todos = repository.getTodos();
    console.log(todos);
    expect(todos).toEqual([]);
  });

  it("deve salvar e retornar um array de todos no localStorage", () => {
    const fakeTodos: Todo[] = todoMock.getTodos();
    repository.saveTodos(fakeTodos);
    const todos = repository.getTodos();
    console.log(todos);
    expect(todos).toEqual(fakeTodos);
  });

  it("deve chamar localStorage.setItem", () => {
    const setItemSpy = jest.spyOn(Storage.prototype, "setItem");
    const fakeTodos: Todo[] = todoMock.getTodos();
    repository.saveTodos(fakeTodos);
    console.log(setItemSpy);
    expect(setItemSpy).toHaveBeenCalledWith("todos", JSON.stringify(fakeTodos));
  });
});

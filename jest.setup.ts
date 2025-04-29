import TodoService from "./src/services/TodoService";
import TodoMock from "./src/tests/mocks/TodoMock";
// jest.setup.ts
// import "./src/tests/mocks/TodoMock";
beforeEach(() => {
  global.repository = new TodoService();
  global.todoMock = new TodoMock();
  localStorage.clear();
  jest.restoreAllMocks();
});

declare global {
  var repository: TodoService;
  var todoMock: TodoMock;
}

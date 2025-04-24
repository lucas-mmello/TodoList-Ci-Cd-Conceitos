// jest.setup.ts
// import "./src/tests/mocks/TodoMock";
beforeEach(() => {
  localStorage.clear();
  jest.restoreAllMocks();
});

import { Todo } from "../../services/TodoService";

import "../../css/TodoList/index.css";

interface TodoListProps {
  todos: Todo[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

export default function TodoList({ todos, onRemove, onToggle }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <div className="checkbox-container">
            <label htmlFor={todo.id.toString() + todo.title}>Completado</label>
            <input
              id={todo.id.toString() + todo.title}
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
          </div>
          <p>Descrição: {todo.description}</p>
          <p>Texto: {todo.text}</p>
          <button onClick={() => onRemove(todo.id)}>Remover tarefa</button>
        </li>
      ))}
    </ul>
  );
}

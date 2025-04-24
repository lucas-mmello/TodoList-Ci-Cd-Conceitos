import { Todo } from "../../services/TodoService";
import "../../css/TodoList/index.css";

interface TodoListProps {
  todos: Todo[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

export default function TodoList({ todos, onRemove, onToggle }: TodoListProps) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <div className="todo-header">
            <span className="todo-title">{todo.title}</span>
          </div>
          <div className="checkbox-container">
            <label htmlFor={`todo-${todo.id}`}>Completado</label>
            <input
              id={`todo-${todo.id}`}
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
          </div>
          <p>
            <strong>Descrição:</strong> {todo.description}
          </p>
          <p>
            <strong>Texto:</strong> {todo.text}
          </p>
          <button onClick={() => onRemove(todo.id)} className="remove-btn">
            Remover tarefa
          </button>
        </li>
      ))}
    </ul>
  );
}

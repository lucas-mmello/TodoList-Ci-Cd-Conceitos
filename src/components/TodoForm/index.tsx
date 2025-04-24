import { useState } from "react";
import { Todo } from "../../services/TodoService";

import "../../css/TodoForm/index.css";

interface TodoFormProps {
  onAdd: (todo: Todo) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [todo, setTodo] = useState<Todo>({
    title: "",
    description: "",
    text: "",
    completed: false,
    id: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(todo);
    cleanForm();
  };

  const cleanForm = () => {
    setTodo({
      title: "",
      description: "",
      text: "",
      completed: false,
      id: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Text"
        value={todo.text}
        onChange={(e) => setTodo({ ...todo, text: e.target.value })}
      />
      <button type="submit">Criar tarefa</button>
    </form>
  );
}

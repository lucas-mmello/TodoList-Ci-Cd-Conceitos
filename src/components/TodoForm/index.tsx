import { useState } from "react";
import { Todo } from "../../services/TodoService";
import "../../css/TodoForm/index.css";
import { v4 as uuidv4 } from "uuid";

interface TodoFormProps {
  onAdd: (todo: Todo) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [todo, setTodo] = useState<Todo>({
    title: "",
    description: "",
    text: "",
    completed: false,
    id: "",
    createdAt: new Date().toISOString(),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todo.title.trim()) return; // evita tarefas vazias
    const newTodo = {
      ...todo,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
    };
    onAdd(newTodo);
    setTodo({ ...todo, title: "", description: "", text: "", id: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Título"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Descrição"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <textarea
        placeholder="Texto detalhado"
        value={todo.text}
        onChange={(e) => setTodo({ ...todo, text: e.target.value })}
        rows={3}
      />
      <button type="submit">Criar tarefa</button>
    </form>
  );
}

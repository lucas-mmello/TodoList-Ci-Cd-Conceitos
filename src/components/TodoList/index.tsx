import { useState } from "react";
import { Todo } from "../../services/TodoService";
import "../../css/TodoList/index.css";
import { motion, AnimatePresence } from "framer-motion";

interface TodoListProps {
  todos: Todo[];
  onRemove: (id: string) => void;
  onEdit?: (todo: Todo) => void; // opcional para casos futuros
}

export default function TodoList({ todos, onRemove, onEdit }: TodoListProps) {
  const [editandoId, setEditandoId] = useState<string | null>(null);
  const [editTodo, setEditTodo] = useState<Partial<Todo>>({});

  const handleEditar = (todo: Todo) => {
    setEditandoId(todo.id);
    setEditTodo({ ...todo });
  };

  const handleSalvar = () => {
    if (editandoId !== null) {
      onEdit?.({
        ...todos.find((t) => t.id === editandoId)!,
        ...editTodo,
      } as Todo);
      setEditandoId(null);
      setEditTodo({});
    }
  };

  const handleCancelar = () => {
    setEditandoId(null);
    setEditTodo({});
  };

  return (
    <ul className="todo-list">
      <AnimatePresence>
        {todos.map((todo) => {
          const isEditing = editandoId === todo.id;
          return (
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              key={todo.id}
              className="todo-item"
            >
              <div
                className="todo-header"
                style={
                  isEditing ? { alignItems: "flex-start", gap: "0.5rem" } : {}
                }
              >
                {isEditing ? (
                  <>
                    <label htmlFor="todo-title">Título</label>
                    <input
                      id="todo-title"
                      className="list-input"
                      type="text"
                      value={editTodo.title || ""}
                      onChange={(e) =>
                        setEditTodo({ ...editTodo, title: e.target.value })
                      }
                    />
                  </>
                ) : (
                  <span className="todo-title">{todo.title}</span>
                )}
              </div>
              {isEditing ? (
                <div className="checkbox-container">
                  <label htmlFor={`todo-${todo.id}`}>Completado</label>
                  <input
                    id={`todo-${todo.id}`}
                    type="checkbox"
                    checked={editTodo.completed || false}
                    onChange={(e) =>
                      setEditTodo({ ...editTodo, completed: e.target.checked })
                    }
                  />
                </div>
              ) : (
                <p>
                  <strong>Completado:</strong> {todo.completed ? "Sim" : "Não"}
                </p>
              )}

              {isEditing ? (
                <>
                  <label htmlFor="todo-description">Descrição</label>
                  <input
                    id="todo-description"
                    className="list-input"
                    type="text"
                    value={editTodo.description || ""}
                    onChange={(e) =>
                      setEditTodo({ ...editTodo, description: e.target.value })
                    }
                    placeholder="Descrição"
                  />
                  <label htmlFor="todo-text">Texto</label>
                  <textarea
                    id="todo-text"
                    className="list-input"
                    onChange={(e) =>
                      setEditTodo({ ...editTodo, text: e.target.value })
                    }
                    placeholder="Texto"
                  >
                    {editTodo.text || ""}
                  </textarea>
                </>
              ) : (
                <>
                  <p>
                    <strong>Descrição:</strong> {todo.description}
                  </p>
                  <p>
                    <strong>Texto:</strong> {todo.text}
                  </p>
                  <p>
                    <strong>Criado em:</strong>{" "}
                    {new Date(todo.createdAt).toLocaleString("pt-BR")}
                  </p>
                  {todo.updatedAt && (
                    <p>
                      <strong>Editado em:</strong>{" "}
                      {new Date(todo.updatedAt).toLocaleString("pt-BR")}
                    </p>
                  )}
                </>
              )}

              {isEditing ? (
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginTop: "0.5rem",
                  }}
                >
                  <button onClick={handleSalvar}>Salvar</button>
                  <button
                    onClick={handleCancelar}
                    style={{ backgroundColor: "#ff0000" }}
                  >
                    Cancelar
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginTop: "0.5rem",
                  }}
                >
                  <button onClick={() => handleEditar(todo)}>Editar</button>
                  <button
                    onClick={() => onRemove(todo.id)}
                    style={{ backgroundColor: "#ff0000" }}
                  >
                    Remover
                  </button>
                </div>
              )}
            </motion.li>
          );
        })}
      </AnimatePresence>
    </ul>
  );
}

// src/components/AssistenteIA.tsx
import { useState } from "react";
import "../../css/AssistenteAi.css";
import { Todo } from "../../../services/TodoService";
import ButtonAi from "../ButtonAi";
import AssistenteIAService from "../../services/AssistenteAiService";
import useTodos from "../../../hooks/useTodos";

// interface AssistenteIAProps {
//   onAddTodos: (todos: Todo[]) => void;
// }

export default function AssistenteAi() {
  const [aberto, setAberto] = useState(false);
  const [input, setInput] = useState("");
  const [carregando, setCarregando] = useState(false);
  // const [erro, setErro] = useState("");
  const { addTodo } = useTodos();

  const gerarTarefas = async () => {
    if (!input.trim()) return;
    setCarregando(true);

    try {
      const service = new AssistenteIAService();
      const resultado = await service.gerarTarefas(input);

      if (resultado.length === 0) {
        // setErro("Não foi possível gerar as tarefas.");
      } else {
        resultado.forEach((todo: Todo) => addTodo(todo));
      }
    } catch (error) {
      // setErro("Erro ao tentar gerar as tarefas.");
    } finally {
      setInput("");
      setAberto(false);
      setCarregando(false);
    }
  };

  return (
    <>
      {aberto && (
        <div className="modal-assistente">
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setAberto(false)}
            >
              X
            </span>
          </div>

          <h3>Assistente IA</h3>
          <textarea
            placeholder="Descreva o que precisa ser feito..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={gerarTarefas} disabled={carregando}>
            {carregando ? "Gerando..." : "Gerar Tarefas"}
          </button>
        </div>
      )}
      <ButtonAi onClick={() => setAberto(!aberto)} />
    </>
  );
}

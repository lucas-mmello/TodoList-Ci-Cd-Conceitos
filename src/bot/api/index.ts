// Api.ts
import { v4 as uuidv4 } from "uuid";
export default class Api {
  static async gerarTarefas(input: string) {
    try {
      const resposta = await fetch(
        `${import.meta.env.VITE_API_URL}.netlify/functions/gerar-tarefas`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ input }),
        }
      );

      if (!resposta.ok) {
        const erro = await resposta.json();
        throw new Error(erro.error || "Erro desconhecido");
      }

      const json = await resposta.json();
      const tarefas = json.data.map((t: any) => ({
        id: uuidv4(),
        title: t.title,
        description: t.description,
        text: t.text,
        completed: false,
        createdAt: new Date().toISOString(),
      }));

      return { success: true, data: tarefas };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return { success: false, error: error.message };
      }
      return { success: false, error: "Erro desconhecido" };
    }
  }
}

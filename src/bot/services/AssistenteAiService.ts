// AssistenteIAService.ts
import Api from "../api/index";

export default class AssistenteIAService {
  async gerarTarefas(input: string) {
    const resultado = await Api.gerarTarefas(input);

    if (resultado.success) {
      // Se tudo deu certo, retorna as tarefas
      return resultado.data;
    } else {
      // Se houve erro, você pode manipular o erro da forma que desejar
      console.error("Erro ao gerar tarefas com IA:", resultado.error);
      return [];
    }
  }
}

import api from "../../index";
import { IResposta } from "../../../interfaces/resposta.interface"

class respostaData {
  index(questaoId: string) {
    return api.get<IResposta[]>(`resposta/${questaoId}/questoes`);
  }
}

export default new respostaData();
import api from "../../index";
import { IResposta } from "../../../interfaces/resposta.interface"

class respostaData {
  show(questoes_id: string) {
    return api.get<IResposta[]>(`resposta/${questoes_id}`);
  }
  index(alternativas_id: string) {
    return api.get<IResposta[]>(`resposta/${alternativas_id}`);
  }
}

export default new respostaData();
import api from "../../index";
import { IResolucao } from "../../../interfaces/resolucao.interface"

class resolucaoData {
  index(questaoId: string) {
    return api.get<IResolucao[]>(`resolucao/${questaoId}/questoes`);
  }
}

export default new resolucaoData();
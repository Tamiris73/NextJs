import api from "../../index";
import { IResolucao } from "../../../interfaces/resolucao.interface"

class resolucaoData {
  show(questoes_id: string) {
    return api.get<IResolucao[]>(`resolucao/${questoes_id}`);
  }
  index(gabarito: string) {
    return api.get<IResolucao[]>(`resolucao/${gabarito}`);
  }
}

export default new resolucaoData();
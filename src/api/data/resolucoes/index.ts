import api from "../../index";
import { IResolucao } from "../../../interfaces/resolucao.interface"

class resolucaoData {
  show(questoes_id: string, gabarito: string) {
    return api.get<IResolucao[]>(`resolucao/${questoes_id}, resolucao/${gabarito}`);
  }
}

export default new resolucaoData();
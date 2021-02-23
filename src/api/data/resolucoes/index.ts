import api from "../../index";
import { IResolucao } from "../../../interfaces/resolucao.interface"

class resolucaoData {
  show(gabarito: string) {
    return api.get<IResolucao[]>(`resolucao/${gabarito}`);
  }
}

export default new resolucaoData();
import api from "../../index";
import { IResolucao } from "../../../interfaces/resolucao.interface"

class resolucaoData {
  index() {
    return api.get<IResolucao[]>('resolucao');
  }
}

export default new resolucaoData();
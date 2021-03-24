import api from "../../index";
import { IQuestao } from "../../../interfaces/questao.interface"

class questaoData {
  index(areaId: string) {
    return api.get<IQuestao[]>(`questao/${areaId}/areaconhecimento`)
  }
}

export default new questaoData();
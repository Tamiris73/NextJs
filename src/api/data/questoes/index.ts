import api from "../../index";
import { IQuestao } from "../../../interfaces/questao.interface"

class questaoData {
  show(area_conhecimentos_id: string) {
    return api.get<IQuestao[]>(`questao/${area_conhecimentos_id}`);
  }
}

export default new questaoData();
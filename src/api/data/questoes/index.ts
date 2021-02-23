import api from "../../index";
import { IQuestao } from "../../../interfaces/questao.interface"

class questaoData {
  index() {
    return api.get<IQuestao[]>('questao');
  }
}

export default new questaoData();
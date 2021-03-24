import api from "../../index";
import { IAlternativa } from "../../../interfaces/alternativa.interface"

class alternativaData {
  index(questaoId: string) {
    return api.get<IAlternativa[]>(`alternativa/${questaoId}/questoes`)
  }
}

export default new alternativaData();
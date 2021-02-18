import api from "../../index";
import { IAlternativa } from "../../../interfaces/alternativa.interface"

class alternativaData {
  show(questoes_id: string) {
    return api.get<IAlternativa[]>(`alternativa/${questoes_id}`);
  }
}

export default new alternativaData();
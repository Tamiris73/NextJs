import api from "../../index";
import { IAlternativa } from "../../../interfaces/alternativa.interface"

class alternativaData {
  index() {
    return api.get<IAlternativa[]>('alternativa');
  }
}

export default new alternativaData();
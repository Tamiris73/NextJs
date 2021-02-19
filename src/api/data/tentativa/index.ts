import api from "../../index";
import { ITentativa } from "../../../interfaces/tentativa.interface"

class tentativaData {
  show(user_id: string, resposta_id: string) {
    return api.get<ITentativa[]>(`tentativa/${user_id}, tentativa/${resposta_id}`);
  }
}

export default new tentativaData();
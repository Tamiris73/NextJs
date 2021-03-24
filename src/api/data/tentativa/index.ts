import api from "../../index";
import { ITentativa } from "../../../interfaces/tentativa.interface"

class tentativaData {
  index(userId: string) {
    return api.get<ITentativa[]>(`tentativa/${userId}/user`);
  }
}

export default new tentativaData();
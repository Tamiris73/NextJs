import api from "../../index";
import { ITentativa } from "../../../interfaces/tentativa.interface"

class tentativaData {
  index() {
    return api.get<ITentativa[]>('tentativa');
  }
}

export default new tentativaData();
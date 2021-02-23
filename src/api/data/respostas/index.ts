import api from "../../index";
import { IResposta } from "../../../interfaces/resposta.interface"

class respostaData {
  index() {
    return api.get<IResposta[]>('resposta');
  }
}

export default new respostaData();
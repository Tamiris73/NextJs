import api from "../../index";
import { IArea } from "../../../interfaces/areaConhecimento.interface"

class areaConhecimentoData {
  show(UserId: string) {
    return api.get<IArea[]>('areaConhecimento/${UserId}');
  }
}

export default new areaConhecimentoData();
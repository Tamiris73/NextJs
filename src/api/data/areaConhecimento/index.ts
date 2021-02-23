import api from "../../index";
import { IArea } from "../../../interfaces/areaConhecimento.interface"

class areaConhecimentoData {
  index(id: string) {
    return api.get<IArea[]>('areaConhecimento');
  }
}

export default new areaConhecimentoData();
import api from "../../index";
import { IUser } from "../../../interfaces/user.interface"

class userData {
  index() {
    return api.get<IUser[]>('user');
  }
}

export default new userData();
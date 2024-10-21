import {TrainApi} from '../train';
import {AxiosInstance} from 'axios';
import {UserApi} from "@/services/api/user";

export class PumpupApi {
  public trainApi;
  public userApi;

  constructor(api: AxiosInstance) {
    this.trainApi = new TrainApi(api);
    this.userApi = new UserApi(api);
  }
}

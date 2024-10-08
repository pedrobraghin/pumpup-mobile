import { TrainApi } from '../train';
import { AxiosInstance } from 'axios';

export class PumpupApi {
  public trainApi;

  constructor(api: AxiosInstance) {
    this.trainApi = new TrainApi(api);
  }
}

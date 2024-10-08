import { ApiResponse } from '@/@types/api-response';
import { Train } from '@/hooks/use-home-data/types';
import { ApiBuilder } from '@/utils';
import { AxiosInstance } from 'axios';

export class TrainApi {
  constructor(private readonly api: AxiosInstance) {}

  async getUserTrains(): ApiResponse<Train[]> {
    try {
      const response = await this.api.get('');

      return ApiBuilder.buildSuccessResponse(response.data);
    } catch (e) {
      return ApiBuilder.buildFailureResponse(e);
    }
  }
}

import {ApiResponse} from '@/@types/api-response';
import {ApiBuilder} from '@/utils';
import {AxiosInstance} from 'axios';
import {CreateUserData, CreateUserResponseData, GetUserResponseData} from "@/hooks/use-user/types";

export class UserApi {
  constructor(private readonly api: AxiosInstance) {}

  async createUser(data: CreateUserData): ApiResponse<CreateUserResponseData> {
    try {
      const response = await this.api.post('users', data);
      return ApiBuilder.buildSuccessResponse(response.data);
    } catch (e: any) {
      return ApiBuilder.buildFailureResponse(e);
    }
  }

  async getUser(id: string): ApiResponse<GetUserResponseData> {
    try {
      const response = await this.api.get(`users/${id}`);

      return ApiBuilder.buildSuccessResponse(response.data);
    } catch (e) {
      return ApiBuilder.buildFailureResponse(e);
    }
  }
}

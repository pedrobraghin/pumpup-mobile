import { Response } from '@/@types/api-response';
import { AxiosError } from 'axios';

export class ApiBuilder {
  static buildSuccessResponse<T>(data: T): Response<T> {
    return {
      success: true,
      data,
    };
  }

  static buildFailureResponse<T>(e: unknown): Response<T> {
    const error = e as AxiosError;
    return {
      success: false,
      error: {
        message: error.cause?.message,
        code: error.status,
        data: error.response?.data,
      },
    };
  }
}

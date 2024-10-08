import { ApiError } from './api-error';

export type Response<T> =
  | {
      error: ApiError;
      success: false;
    }
  | {
      data: T;
      success: true;
    };

export type ApiResponse<T> = Promise<Response<T>>;

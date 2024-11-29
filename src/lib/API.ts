import { ServerResponse } from '../typings';

export interface APIResponse<T> extends ServerResponse {
  data?: T;
}

export interface RegistrationData {
  username: string;
  email: string;
  password: string;
}

export interface RequestOptions {
  method?: string;
  headers?: { [key: string]: string };
  body?: FormData | string;
}

export default class API {
  async get<T>(url: RequestInfo | URL, options?: RequestOptions): Promise<APIResponse<T>> {
    try {
      const response = await fetch(url, {
        ...options,
      });

      const result = await response.json();
      return {
        status: response.ok ? 'success' : 'error',
        message: result.message || response.statusText,
        data: result.data,
      };
    } catch (error) {
      return {
        status: 'error',
        message: error instanceof Error ? error.message : 'An error occurred',
      };
    }
  }

  async post<T>(url: RequestInfo | URL, options?: RequestOptions): Promise<APIResponse<T>> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        ...options,
      });

      const result = await response.json();
      return {
        status: response.ok ? 'success' : 'error',
        message: result.message || response.statusText,
        data: result.data,
      };
    } catch (error) {
      return {
        status: 'error',
        message: error instanceof Error ? error.message : 'An error occurred',
      };
    }
  }
}

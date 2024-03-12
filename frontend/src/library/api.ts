export interface IRequestOptions<T = any> {
  body?: T;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: any;
}

export class IErrorResponse {
  constructor(public message: string, public code: number) {}
}

export async function request<DataResponse = any>(url: string, options?: IRequestOptions): Promise<DataResponse | IErrorResponse | undefined> {
  try {
    const response = await fetch(url, { method: options?.method ?? 'GET', body: typeof options?.body === 'object' ? JSON.stringify(options.body) : options?.body, headers: options?.headers ?? { 'Content-Type': 'application/json' } });

    if (!response.ok || response.status !== 200) {
      try {
        const error = (await response.json()) as IErrorResponse;
        return new IErrorResponse(error.message, error.code);
      } catch (error) {
        return new IErrorResponse('API Failure', 500);
      }
    } else {
      return await response.json();
    }
  } catch (error) {
    return new IErrorResponse('API Failure', 500);
  }
}


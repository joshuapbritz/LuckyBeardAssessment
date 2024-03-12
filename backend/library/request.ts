import request from 'request';

export function makeRequest<T>(url: string): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    request(url, (error, response, body) => {
      if (!!error || response.statusCode !== 200) {
        reject(500);
      }

      resolve(JSON.parse(body));
    });
  });
}


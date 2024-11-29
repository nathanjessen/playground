import { useState } from 'react';
import API, { APIResponse } from '../lib/API';

const api = new API();

function useFormPost<T>(): {
  data: APIResponse<T> | null;
  done: boolean;
  error: string | null;
  postFormData: (url: string, formData: FormData) => Promise<void>;
} {
  const [data, setData] = useState<APIResponse<T> | null>(null);
  const [done, setDone] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const postFormData = async (url: string, formData: FormData) => {
    try {
      const response = await api.post<T>(url, {
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      setData(response);
      setDone(true);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setDone(true);
    }
  };

  return {
    data,
    done,
    error,
    postFormData,
  };
}

export default useFormPost;

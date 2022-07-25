import { useState } from 'react';
import API from "../lib/API";

const api = new API();

function useFormPost<Payload>(url: string): {
  data: Payload | null;
  done: boolean;
  postFormData: (T: FormData) => void;
} {
  const [data, setData] = useState<Payload | null>(null);
  const [done, setDone] = useState<boolean>(false);

  const postFormData = async (body: FormData) => {
    await api.post(url, {
      body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(res => {
        setDone(true);
        setData(res);
      });
  };

  return {
    data,
    done,
    postFormData,
  };
}

export default useFormPost;

import { http } from 'msw';
import { SIGNUP_API } from '../constants';
import { ServerResponse } from '../typings';

const signupHandler = http.post(SIGNUP_API, async (_request) => {
  const success = true;

  if (success) {
    return new Response(
      JSON.stringify({
        status: 'success',
        message: 'Registration successful',
      } satisfies ServerResponse),
      { status: 200 }
    );
  }

  return new Response(
    JSON.stringify({
      status: 'error',
      message: 'Registration failed',
    } satisfies ServerResponse),
    { status: 400 }
  );
});

export const handlers = [signupHandler];

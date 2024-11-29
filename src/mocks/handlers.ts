import { http, HttpResponse } from 'msw';
import { SIGNUP_API } from '../constants';
import { ServerResponse } from '../typings';

const signupHandler = http.post(
  SIGNUP_API,
  async ({ request }) => {
    let success = true;

    if (success) {
      return HttpResponse.json<ServerResponse>(
        {
          status: 'success',
          message: 'Thank you. You are now subscribed.',
        },
        {
          status: 200,
        }
      );
    } else {
      return HttpResponse.json<ServerResponse>(
        {
          status: 'error',
          message: 'Invalid Subscription request.',
        },
        {
          status: 200,
        }
      );
    }
  }
);

export const handlers = [signupHandler];

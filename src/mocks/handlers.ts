import { rest } from "msw";
import { SIGNUP_API } from "../constants";
import { ServerResponse } from '../typings';

const signupHandler = rest.post<FormData, ServerResponse>(SIGNUP_API, (req, res, ctx) => {
  let success = true;

  if (success) {
    return res(
      ctx.delay(3000),
      ctx.status(200),
      ctx.json({
        status: "success",
        message: "Thank you. You are now subscribed.",
      })
    );
  } else {
    return res(
      ctx.delay(3000),
      ctx.status(200),
      ctx.json({
        status: "error",
        message: "Invalid Subscription request.",
      })
    );
  }
});

export const handlers = [
  signupHandler,
];

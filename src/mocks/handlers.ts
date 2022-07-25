import { rest } from "msw";
import { SIGNUP_API, WORDS_API, WORD_API } from "../constants";
import { ServerResponse } from '../typings';
import { words } from '../data/words';

const wordsHandler = rest.get(WORDS_API, (req, res, ctx) => {
  const wordLength = req.url.searchParams.get('length');
  let results = words;

  if (wordLength) {
    const numLength = parseInt(wordLength);
    results = words.filter(word => word.length === numLength);
  }

  return res(
    ctx.delay(500),
    ctx.status(200),
    ctx.json(results)
  );
});

const wordHandler = rest.get(WORD_API, (req, res, ctx) => {
  const wordLength = req.url.searchParams.get('length');
  let results = words;

  if (wordLength) {
    const numLength = parseInt(wordLength);
    results = words.filter(word => word.length === numLength);
  }

  return res(
    ctx.delay(500),
    ctx.status(200),
    ctx.json(results[Math.floor(Math.random() * results.length)])
  );
});

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
  wordsHandler,
  wordHandler,
  signupHandler,
];

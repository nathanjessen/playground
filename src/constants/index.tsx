const isDev = process.env.NODE_ENV === 'development';

export const WORDS_API: string = isDev ? '/words' : 'https://random-word-api.herokuapp.com/words';
export const WORD_API: string = isDev ? '/word' : 'https://random-word-api.herokuapp.com/word';
export const SIGNUP_API: string = '/signup';

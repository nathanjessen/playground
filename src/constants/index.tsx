const isDev = process.env.NODE_ENV === 'development';

export const SIGNUP_API: string = isDev ? '/signup' : '';

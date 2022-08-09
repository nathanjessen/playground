export type FormErrors = { [key: string]: string };

export type ServerResponse = {
  status: 'error' | 'success';
  message: string;
};

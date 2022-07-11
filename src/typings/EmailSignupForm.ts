export type FormErrors = { [key: string]: string; };

export type EmailSignupFormData = {
  firstName: string;
  lastName: string;
  email: string;
  orgname?: string;
  euResident: string;
  advances?: string;
  alerts?: string;
  other?: string;
};

export type EmailSignupFormValidatorResponse = {
  success: boolean;
  message: string;
  errors: { [key: string]: string; };
};

export type ServerResponseStatus = 'error' | 'success';

export type EmailSignupFormResponse = {
  status: ServerResponseStatus;
  message: string;
};


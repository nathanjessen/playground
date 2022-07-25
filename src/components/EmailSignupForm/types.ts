export type EmailSignupFormData = {
  firstName: string;
  lastName: string;
  email: string;
  orgname?: string;
  available: string;
  advances?: string;
  alerts?: string;
  other?: string;
};

export type EmailSignupFormValidatorResponse = {
  success: boolean;
  message: string;
  errors: { [key: string]: string; };
};

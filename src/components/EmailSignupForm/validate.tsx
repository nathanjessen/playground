import isEmail from 'validator/lib/isEmail';
import { EmailSignupFormData, EmailSignupFormValidatorResponse } from './types';

export const validateEmailSignupForm = (payload: EmailSignupFormData): EmailSignupFormValidatorResponse => {
  const errors: { [key: string]: string; } = {};
  let message: string = "";
  let isValidForm: boolean = true;

  if (!payload || payload.firstName.trim().length === 0) {
    isValidForm = false;
    errors.firstName = "First name cannot be empty.";
  }

  if (!payload || payload.lastName.trim().length === 0) {
    isValidForm = false;
    errors.lastName = "Last name cannot be empty.";
  }

  if (!payload || !isEmail(payload.email)) {
    isValidForm = false;
    errors.email = "Looks like this is not an email.";
  }

  if (!payload || payload.email.trim().length === 0) {
    isValidForm = false;
    errors.email = "Email cannot be empty.";
  }

  if (!payload || payload.available.trim().length === 0) {
    isValidForm = false;
    errors.available = "Available cannot be empty.";
  }

  if (!payload || (
    payload.advances?.trim().length === 0 &&
    payload.alerts?.trim().length === 0 &&
    payload.other?.trim().length === 0)
  ) {
    isValidForm = false;
    errors.other = "At least one of the checkbox options is required.";
  }

  if (!isValidForm) {
    message = "Form contains errors.";
  }

  return {
    success: isValidForm,
    message,
    errors
  };
};

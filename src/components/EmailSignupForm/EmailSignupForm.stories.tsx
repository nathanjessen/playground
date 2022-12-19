import { Meta } from '@storybook/react';
import { EmailSignupForm } from './EmailSignupForm';

export default {
  title: 'Components/EmailSignupForm',
  component: EmailSignupForm,
} as Meta;

export const Default = {
  args: {},
};

export const Loading = {
  args: {
    loading: true,
  },
};

export const Errors = {
  args: {
    errors: {
      form: 'Form contains errors.',
      firstName: 'First name cannot be empty.',
      lastName: 'Last name cannot be empty.',
      email: 'Email cannot be empty.',
      orgname: 'Organization cannot be empty.',
      available: 'Available cannot be empty.',
      other: 'At least one of the checkbox options is required.',
    },
  },
};

export const EmailValidation = {
  args: {
    fields: {
      firstName: '',
      lastName: '',
      email: 'test',
      available: '',
    },
    errors: {
      email: 'Looks like this is not an email.',
    },
  },
};

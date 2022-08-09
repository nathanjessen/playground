import { Meta, Story } from '@storybook/react';
import { EmailSignupForm, EmailSignupFormProps } from './EmailSignupForm';

export default {
  title: 'Components/EmailSignupForm',
  component: EmailSignupForm,
} as Meta;

const Template: Story<EmailSignupFormProps> = (args) => (
  <EmailSignupForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Errors = Template.bind({});
Errors.args = {
  errors: {
    form: 'Form contains errors.',
    firstName: 'First name cannot be empty.',
    lastName: 'Last name cannot be empty.',
    email: 'Email cannot be empty.',
    orgname: 'Organization cannot be empty.',
    available: 'Available cannot be empty.',
    other: 'At least one of the checkbox options is required.',
  },
};

export const EmailValidation = Template.bind({});
EmailValidation.args = {
  fields: {
    firstName: '',
    lastName: '',
    email: 'test',
    available: '',
  },
  errors: {
    email: 'Looks like this is not an email.',
  },
};

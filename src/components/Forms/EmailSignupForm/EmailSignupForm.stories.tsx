import { Story, Meta } from '@storybook/react';
import { EmailSignupForm, EmailSignupFormProps } from './EmailSignupForm';

export default {
  title: "Forms/EmailSignupForm",
  component: EmailSignupForm,
} as Meta;

const Template: Story<EmailSignupFormProps> = (args) => <EmailSignupForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

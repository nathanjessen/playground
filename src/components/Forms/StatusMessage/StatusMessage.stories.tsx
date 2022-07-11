import { Story, Meta } from '@storybook/react';
import { StatusMessage, StatusMessageProps } from './StatusMessage';

export default {
  title: "Forms/StatusMessage",
  component: StatusMessage,
} as Meta;

const Template: Story<StatusMessageProps> = (args) => <StatusMessage {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Success = Template.bind({});
Success.args = {
  status: 'success',
  message: 'Thank you. You are now subscribed.',
};

export const Error = Template.bind({});
Error.args = {
  status: 'error',
  message: 'Invalid Subscription request.',
};

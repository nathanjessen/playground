import { Meta, Story } from '@storybook/react';
import { ServerResponse } from '../../typings';
import { StatusMessage } from './StatusMessage';

export default {
  title: 'Components/StatusMessage',
  component: StatusMessage,
} as Meta;

const Template: Story<ServerResponse> = (args) => <StatusMessage {...args} />;

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

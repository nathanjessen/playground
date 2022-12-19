import { Meta } from '@storybook/react';
import { StatusMessage } from './StatusMessage';

export default {
  title: 'Components/StatusMessage',
  component: StatusMessage,
} as Meta;

export const Default = {
  args: {},
};

export const Success = {
  args: {
    status: 'success',
    message: 'Thank you. You are now subscribed.',
  },
};

export const Error = {
  args: {
    status: 'error',
    message: 'Invalid Subscription request.',
  },
};

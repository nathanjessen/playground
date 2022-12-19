import { Meta } from '@storybook/react';
import { SocialSignIn } from './SocialSignIn';

export default {
  title: 'Components/SocialSignIn',
  component: SocialSignIn,
} as Meta;

export const Default = {
  args: {},
};

export const Title = {
  args: {
    title: 'Sign in with',
  },
};

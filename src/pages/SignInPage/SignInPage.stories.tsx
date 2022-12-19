import { Meta } from '@storybook/react';
import { SignInPage } from './SignInPage';

export default {
  title: 'Pages/SignInPage',
  component: SignInPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = {
  args: {},
};

export const Title = {
  args: {
    title: 'Sign In',
  },
};

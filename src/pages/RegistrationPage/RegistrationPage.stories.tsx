import { Meta } from '@storybook/react';
import { RegistrationPage } from './RegistrationPage';

export default {
  title: 'Pages/RegistrationPage',
  component: RegistrationPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = {
  args: {},
};

export const Title = {
  args: {
    title: 'Register for an Account',
  },
};

import { Meta } from '@storybook/react';
import { RegistrationForm } from './RegistrationForm';

export default {
  title: 'Components/RegistrationForm',
  component: RegistrationForm,
} as Meta;

export const Default = {
  args: {},
};

export const Loading = {
  args: {
    loading: true,
  },
};

export const ButtonText = {
  args: {
    btnText: 'Button',
  },
};

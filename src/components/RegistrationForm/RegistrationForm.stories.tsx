import { Meta, Story } from '@storybook/react';

import { IRegistrationFormProps, RegistrationForm } from './RegistrationForm';

export default {
  title: 'Components/RegistrationForm',
  component: RegistrationForm,
} as Meta;

const Template: Story<IRegistrationFormProps> = (args) => (
  <RegistrationForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const ButtonText = Template.bind({});
ButtonText.args = {
  btnText: 'Button',
};

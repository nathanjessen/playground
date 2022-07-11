import { Story, Meta } from '@storybook/react';

import { RegistrationForm, IRegistrationFormProps } from './RegistrationForm';

export default {
  title: "Forms/RegistrationForm",
  component: RegistrationForm,
} as Meta;

const Template: Story<IRegistrationFormProps> = (args) => <RegistrationForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const ButtonText = Template.bind({});
ButtonText.args = {
  btnText: "Button",
};

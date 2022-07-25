import { Story, Meta } from '@storybook/react';

import { InputField, InputFieldProps } from './InputField';

export default {
  title: "Base/InputField",
  component: InputField,
  args: {
    name: 'fieldname',
  }
} as Meta;

const Template: Story<InputFieldProps> = args => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Active = Template.bind({});
Active.args = {
  autoFocus: true,
};

export const Label = Template.bind({});
Label.args = {
  label: 'Username',
};

export const Required = Template.bind({});
Required.args = {
  label: 'Username',
  required: true,
};

export const Optional = Template.bind({});
Optional.args = {
  label: 'Username',
  required: false,
};

export const TypeEmail = Template.bind({});
TypeEmail.args = {
  type: 'email',
};

export const TypePassword = Template.bind({});
TypePassword.args = {
  type: 'password',
};

export const TypeNumber = Template.bind({});
TypeNumber.args = {
  type: 'number',
};

export const Value = Template.bind({});
Value.args = {
  label: 'Name',
  value: 'John Doe',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Validation',
  error: 'Field name cannot be empty.',
};

import { Meta } from '@storybook/react';
import { InputField } from './InputField';

export default {
  title: 'Base/InputField',
  component: InputField,
  args: {
    name: 'fieldname',
  },
} as Meta;

export const Default = {
  args: {},
};

export const Active = {
  args: {
    autoFocus: true,
  },
};

export const Label = {
  args: {
    label: 'Username',
  },
};

export const Required = {
  args: {
    label: 'Username',
    required: true,
  },
};

export const Optional = {
  args: {
    label: 'Username',
    required: false,
  },
};

export const TypeEmail = {
  args: {
    type: 'email',
  },
};

export const TypePassword = {
  args: {
    type: 'password',
  },
};

export const TypeNumber = {
  args: {
    type: 'number',
  },
};

export const Value = {
  args: {
    label: 'Name',
    value: 'John Doe',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const Error = {
  args: {
    label: 'Validation',
    error: 'Field name cannot be empty.',
  },
};

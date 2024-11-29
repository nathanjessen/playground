import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta = {
  title: 'Base/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Input field name attribute',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text for the input field',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'HTML input type',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the field is disabled',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'username',
    placeholder: 'Enter username',
  },
};

export const WithLabel: Story = {
  args: {
    name: 'username',
    label: 'Username',
    placeholder: 'Enter username',
  },
};

export const Required: Story = {
  args: {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    placeholder: 'Enter email',
  },
};

export const Optional: Story = {
  args: {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    required: false,
    placeholder: 'Enter phone number',
  },
};

export const WithError: Story = {
  args: {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    value: 'invalid-email',
    error: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  args: {
    name: 'username',
    label: 'Username',
    disabled: true,
    value: 'johndoe',
  },
};

export const Password: Story = {
  args: {
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true,
    placeholder: 'Enter password',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InputField name="default" label="Default" placeholder="Default input" />
      <InputField name="required" label="Required" required placeholder="Required input" />
      <InputField
        name="error"
        label="With Error"
        error="This field has an error"
        placeholder="Error state"
      />
      <InputField name="disabled" label="Disabled" disabled value="Disabled input" />
    </div>
  ),
};

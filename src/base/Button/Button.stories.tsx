import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Base/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['ghost', 'link', 'outline', 'glass'],
    },
    shape: {
      control: 'select',
      options: ['wide', 'block', 'circle', 'square'],
    },
    animation: {
      control: 'text',
    },
    active: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    color: 'secondary',
  },
};

export const Accent: Story = {
  args: {
    children: 'Button',
    color: 'accent',
  },
};

export const Info: Story = {
  args: {
    children: 'Button',
    color: 'info',
  },
};

export const Success: Story = {
  args: {
    children: 'Button',
    color: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Button',
    color: 'warning',
  },
};

export const Error: Story = {
  args: {
    children: 'Button',
    color: 'error',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="glass">Glass</Button>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button shape="wide">Wide</Button>
      <Button shape="block">Block</Button>
      <Button shape="circle">C</Button>
      <Button shape="square">S</Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button active>Active</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
  ),
};

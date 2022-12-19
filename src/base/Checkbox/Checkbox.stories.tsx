import { Meta } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Base/Checkbox',
  component: Checkbox,
  args: {
    name: 'checkboxField',
    checked: true,
  },
} as Meta;

export const Default = {
  args: {
    checked: false,
  },
};

export const Checked = {
  args: {
    checked: true,
  },
};

export const Focused = {
  args: {
    autoFocus: true,
  },
};

export const Label = {
  args: {
    label: 'Checkbox',
  },
};

export const Disabled = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const XSmall = {
  args: {
    sizeMod: 'xs',
  },
};

export const Small = {
  args: {
    sizeMod: 'sm',
  },
};

export const Medium = {
  args: {
    sizeMod: 'md',
  },
};

export const Large = {
  args: {
    sizeMod: 'lg',
  },
};

export const Primary = {
  args: {
    color: 'primary',
  },
};

export const Secondary = {
  args: {
    color: 'secondary',
  },
};

export const Accent = {
  args: {
    color: 'accent',
  },
};

import { Meta } from '@storybook/react';
import { DropList } from './DropList';

export default {
  title: 'Base/DropList',
  component: DropList,
} as Meta;

export const Default = {
  args: {},
};

export const Label = {
  args: {
    label: 'Available',
  },
};

export const Required = {
  args: {
    label: 'Available',
    required: true,
  },
};

export const Items = {
  args: {
    label: 'Available',
    items: ['No', 'Yes'],
  },
};

import { Meta, StoryFn } from '@storybook/react';
import { Divider } from './Divider';

export default {
  title: 'Base/Divider',
  component: Divider,
} as Meta;

const gridDecorator = (Story: StoryFn) => (
  <div className="flex w-full">
    <div className="card grid h-20 flex-grow place-items-center rounded-box bg-base-300">
      content
    </div>
    <Story />
    <div className="card grid h-20 flex-grow place-items-center rounded-box bg-base-300">
      content
    </div>
  </div>
);

export const Default = {
  args: {},
};

export const Text = {
  args: {
    children: 'Or',
  },
};

export const Horizontal = {
  decorators: [gridDecorator],
  args: {
    variant: 'horizontal',
    children: 'Nor',
  },
};

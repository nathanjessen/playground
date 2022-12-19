import { Meta, StoryFn } from '@storybook/react';
import { Divider } from './Divider';

export default {
  title: 'Base/Divider',
  component: Divider,
} as Meta;

const gridDecorator = (Story: StoryFn) => (
  <div className='flex w-full'>
    <div className='grid h-20 flex-grow card bg-base-300 rounded-box place-items-center'>
      content
    </div>
    <Story />
    <div className='grid h-20 flex-grow card bg-base-300 rounded-box place-items-center'>
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

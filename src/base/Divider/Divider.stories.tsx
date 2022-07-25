import { Story, Meta, DecoratorFn } from '@storybook/react';
import { PropsWithChildren } from 'react';

import { Divider, IDividerProps } from './Divider';

export default {
  title: "Base/Divider",
  component: Divider,
} as Meta;

const Template: Story<PropsWithChildren<IDividerProps>> = (args) => <Divider {...args} />;

const gridDecorator: DecoratorFn = (Story) => (
  <div className="flex w-full">
    <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
    <Story />
    <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Text = Template.bind({});
Text.args = {
  children: 'Or',
};

export const Horizontal = Template.bind({});
Horizontal.decorators = [gridDecorator];
Horizontal.args = {
  variant: 'horizontal',
  children: 'Nor',
};

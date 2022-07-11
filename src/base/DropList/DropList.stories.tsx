import { Story, Meta } from '@storybook/react';
import { DropList, DropListProps } from './DropList';

export default {
  title: 'Base/DropList',
  component: DropList,
} as Meta;

const Template: Story<DropListProps> = (args) => <DropList {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Label = Template.bind({});
Label.args = {
  label: 'EU Resident',
};

export const Required = Template.bind({});
Required.args = {
  label: 'EU Resident',
  required: true,
};

export const Items = Template.bind({});
Items.args = {
  label: 'EU Resident',
  items: ['No', 'Yes'],
};
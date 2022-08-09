import { Meta, Story } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Base/Checkbox',
  component: Checkbox,
  args: {
    name: 'checkboxField',
    checked: true,
  },
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Focused = Template.bind({});
Focused.args = {
  autoFocus: true,
};

export const Label = Template.bind({});
Label.args = {
  label: 'Checkbox',
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: true,
  disabled: true,
};

export const XSmall = Template.bind({});
XSmall.args = {
  sizeMod: 'xs',
};

export const Small = Template.bind({});
Small.args = {
  sizeMod: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  sizeMod: 'md',
};

export const Large = Template.bind({});
Large.args = {
  sizeMod: 'lg',
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Accent = Template.bind({});
Accent.args = {
  color: 'accent',
};

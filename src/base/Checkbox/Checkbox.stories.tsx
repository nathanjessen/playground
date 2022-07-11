import { Story, Meta } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: "Base/Checkbox",
  component: Checkbox,
  args: {
    name: "checkboxField",
  },
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {};

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

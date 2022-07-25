import { Story, Meta } from '@storybook/react';
import { ThemeDropdown } from './ThemeDropdown';

export default {
  title: 'Components/ThemeDropdown',
  component: ThemeDropdown,
} as Meta;

const Template: Story = (args) => <ThemeDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {};

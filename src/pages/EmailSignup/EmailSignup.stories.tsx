import { Story, Meta } from '@storybook/react';

import { EmailSignup } from './EmailSignup';

export default {
  title: "Pages/EmailSignup",
  component: EmailSignup,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = (args) => <EmailSignup {...args} />;

export const Default = Template.bind({});
Default.args = {};

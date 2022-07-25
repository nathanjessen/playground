import { Story, Meta } from '@storybook/react';

import { SocialSignIn } from './SocialSignIn';

export default {
  title: "Components/SocialSignIn",
  component: SocialSignIn,
} as Meta;

const Template: Story = (args) => <SocialSignIn {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Title = Template.bind({});
Title.args = {
  title: "Sign in with",
};

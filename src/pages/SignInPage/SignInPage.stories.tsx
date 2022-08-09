import { Meta, Story } from '@storybook/react';

import { SignInPage, SignInPageProps } from './SignInPage';

export default {
  title: 'Pages/SignInPage',
  component: SignInPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<SignInPageProps> = (args) => <SignInPage {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Title = Template.bind({});
Title.args = {
  title: 'Sign In',
};

import { Story, Meta } from '@storybook/react';

import { RegistrationPage, RegistrationPageProps } from './RegistrationPage';

export default {
  title: "Pages/RegistrationPage",
  component: RegistrationPage,
  parameters: {
    layout: "fullscreen"
  },
} as Meta;

const Template: Story<RegistrationPageProps> = (args) => <RegistrationPage {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Title = Template.bind({});
Title.args = {
  title: "Register for an Account"
};

import { Story, Meta } from '@storybook/react';

import { SignInForm, SignInFormProps } from './SignInForm';

export default {
  title: "Components/SignInForm",
  component: SignInForm,
} as Meta;

const Template: Story<SignInFormProps> = (args) => <SignInForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

import { Story, Meta } from '@storybook/react';
import { WordlePage } from './WordlePage';

export default {
  title: "Pages/Wordle",
  component: WordlePage,
} as Meta;

const Template: Story = (args) => <WordlePage {...args} />;

export const Default = Template.bind({});
Default.args = {};

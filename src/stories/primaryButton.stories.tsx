import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PrimaryButton from '../components/primaryButton';

// Default export with metadata for the component
export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Click Me',
};

export const WithCustomText = Template.bind({});
WithCustomText.args = {
  text: 'Custom Text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled',
  onClick: undefined,
};

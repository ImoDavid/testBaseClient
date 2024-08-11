import type { Meta, StoryObj } from '@storybook/react';
import PrimaryButton from '../components/primaryButton';

export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta<typeof PrimaryButton>;

export const Default: StoryObj<typeof PrimaryButton> = {
  args: {
    text: 'Click Me',
  },
};

export const WithCustomText: StoryObj<typeof PrimaryButton> = {
  args: {
    text: 'Custom Text',
  },
};

export const Disabled: StoryObj<typeof PrimaryButton> = {
  args: {
    text: 'Disabled',
    onClick: undefined,
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import HeaderText from '../components/headerText';
import { colors } from '../utils/globals';
type HeaderTextProps = {
  title: string;
  textColor?: string;
  dividerColor?: string;
  width?: string;
  fontSize?: string[];
  textAlign?: string;
  alignItems?: string;
};
export default {
  title: 'Components/HeaderText',
  component: HeaderText,
  argTypes: {
    title: { control: 'text' },
    textColor: { control: 'color' },
    dividerColor: { control: 'color' },
    width: { control: 'text' },
    fontSize: { control: 'object' }, 
    textAlign: { control: 'text' },
    alignItems: { control: 'text' },
  },
} as Meta<HeaderTextProps>;

export const Default: StoryObj<typeof HeaderText> = {
  args: {
    title: 'Header Title',
  },
};

export const CustomColors: StoryObj<typeof HeaderText> = {
  args: {
    title: 'Custom Colors',
    textColor: colors.OFF_WHITE,
    dividerColor: colors.WHITE,
  },
};

export const CustomStyles: StoryObj<typeof HeaderText> = {
  args: {
    title: 'Custom Styles',
    width: '20%',
    fontSize: ['1.8rem', '2.5rem'],
    textAlign: 'left',
    alignItems: 'flex-start',
  },
};

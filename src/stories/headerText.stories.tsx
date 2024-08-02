import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeaderText from '../components/headerText';
import { colors } from '../utils/globals';


export default {
  title: 'Components/HeaderText',
  component: HeaderText,
  argTypes: {
    title: { control: 'text' },
    textColor: { control: 'color' },
    dividerColor: { control: 'color' },
    width: { control: 'text' },
    fontSize: { control: 'array' },
    textAlign: { control: 'text' },
    alignItems: { control: 'text' },
  },
} as ComponentMeta<typeof HeaderText>;

const Template: ComponentStory<typeof HeaderText> = (args) => (
  <HeaderText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Header Title',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  title: 'Custom Colors',
  textColor: colors.OFF_WHITE,
  dividerColor: colors.WHITE,
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  title: 'Custom Styles',
  width: '20%',
  fontSize: ['1.8rem', '2.5rem'],
  textAlign: 'left',
  alignItems: 'flex-start',
};

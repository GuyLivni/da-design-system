import React from 'react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
  },
  parameters: {},
};

export const Base = (args: ButtonProps) => <Button {...args} />;

Base.args = {
  isPrimary: true,
  isSecondary: false,
  isSmall: false,
  children: `Heyo!`,
};

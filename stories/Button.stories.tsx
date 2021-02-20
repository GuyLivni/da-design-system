import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src/components/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Heyo!</Button>;

export const SCButton = Template.bind({});

SCButton.args = { text: 'Button' };

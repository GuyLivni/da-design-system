import React from 'react';
import { action } from '@storybook/addon-actions';
import { styled } from 'twin.macro';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
  },
  parameters: {},
};

export const Base = (args: ButtonProps) => (
  <Button onClick={action('Button Click')} {...args} />
);

Base.args = {
  children: `Heyo!`,
  variant: 'primary',
  size: 'large',
};

const Group = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > * {
    margin: 10px;
  }
`;

export const Variants = (args: ButtonProps) => (
  <Group>
    <Button {...args} variant="primary">
      Primary
    </Button>
    <Button {...args} variant="secondary">
      Secondary
    </Button>
    <Button {...args} variant="text">
      Text
    </Button>
  </Group>
);

export const Sizes = (args: ButtonProps) => (
  <>
    <Button {...args} size="small">
      Small
    </Button>
  </>
);

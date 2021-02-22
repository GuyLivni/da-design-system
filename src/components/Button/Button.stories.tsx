import React from 'react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
  },
  parameters: {},
};

export const Base = (args: ButtonProps) => <Button {...args} />;

Base.args = {
  children: `Heyo!`,
};

export const Variants = (args: ButtonProps) => (
  <>
    <Button {...args} variant="primary">
      Primary
    </Button>
    <Button {...args} variant="secondary">
      Secondary
    </Button>
  </>
);

export const Sizes = (args: ButtonProps) => (
  <>
    <Button {...args} size="small">
      Small
    </Button>
  </>
);

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'twin.macro';
import { mainTheme } from '../src';

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on.*' },
  options: {
    storySort: {
      order: ['Introduction', 'Advanced', 'Components'],
    },
  },
};

const withThemeProvider = (Story) => (
  <ThemeProvider theme={mainTheme}>
    <GlobalStyles />
    <Story />
  </ThemeProvider>
);

export const decorators = [
  withThemeProvider,
];
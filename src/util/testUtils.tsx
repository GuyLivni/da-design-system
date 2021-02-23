import { RenderOptions, render } from '@testing-library/react';
import React, { FC, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../.';

const Providers: FC<any> = ({ children }) => (
  <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
);

const customRender = (
  ui: ReactElement<any>,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };

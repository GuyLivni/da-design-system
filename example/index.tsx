import 'react-app-polyfill/ie11';
import * as React from 'react';
import { render } from 'react-dom';

import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../.';
import App from './App';

const rootElement = document.getElementById('root');

render(
  <ThemeProvider theme={mainTheme}>
    <App />
  </ThemeProvider>,
  rootElement
);

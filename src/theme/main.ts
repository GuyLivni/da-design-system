import { theme } from 'twin.macro';
import { DefaultTheme } from 'styled-components';

const defaultTheme = theme<Record<any, any>>();

const main: DefaultTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: defaultTheme.colors.blue[600],
  },
};

export default main;

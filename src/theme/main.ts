import { theme } from 'twin.macro';
import { DefaultTheme } from 'styled-components';

const defaultTheme = theme<Record<any, any>>();
const colors = defaultTheme.colors;

const main: DefaultTheme = {
  ...defaultTheme,
  colors: {
    primary: {
      50: colors.blue[600],
    },
    ...colors,
  },
};

export default main;

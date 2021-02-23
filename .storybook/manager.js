import { addons } from '@storybook/addons';
import { themes, create } from '@storybook/theming';
import { mainTheme } from '../src';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Da Design System',
    brandUrl: 'https://github.com/GuyLivni/da-design-system'
  }),
  isFullscreen: false,
  showPanel: true,
  panelPosition: 'bottom',
  isToolshown: true,
});

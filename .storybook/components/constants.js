import { mainTheme } from '../../src/';

export const TWIN_THEME_COLORS = Object.values(mainTheme.colors).filter(
  (item) => typeof item === 'object'
);

export const COLOR_GROUP_NAMES = [
  {
    name: 'Primary',
    description: 'colors.primary',
  },
  {
    name: 'Gray',
    description: 'colors.coolGray',
  },
  {
    name: 'Red',
    description: 'colors.red',
  },
  {
    name: 'Yellow',
    description: 'colors.amber',
  },
  {
    name: 'Green',
    description: 'colors.emerald',
  },
  {
    name: 'Blue',
    description: 'colors.blue',
  },
  {
    name: 'Indigo',
    description: 'colors.indigo',
  },
  {
    name: 'Purple',
    description: 'colors.violet',
  },
  {
    name: 'Pink',
    description: 'colors.pink',
  },
];

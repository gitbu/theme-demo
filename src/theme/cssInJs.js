export const THEME_TYPES = {
  LIGHTER: 'lighter',
  DARK: 'dark',
  RED: 'red',
};

const LIGHTER_THEME = [
  THEME_TYPES.LIGHTER,
  {
    bgColor: 'white',
    textColor: 'black',
  },
];

const DARK_THEME = [
  THEME_TYPES.DARK,
  {
    bgColor: 'black',
    textColor: 'white',
  },
];

const RED_THEME = [
  THEME_TYPES.RED,
  {
    bgColor: 'red',
    textColor: 'white',
  },
];

const config = new Map([
  LIGHTER_THEME,
  DARK_THEME,
  RED_THEME,
]);

export default config;

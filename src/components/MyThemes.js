import normalTheme from './themes/normalTheme';
import darkTheme from './themes/darkTheme';

const themes = {
  normalTheme,
  darkTheme,
}

export default function getTheme(theme) {
  return themes[theme]
}
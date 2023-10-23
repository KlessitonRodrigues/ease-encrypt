import { Appearance } from 'react-native';

export const isDarkMode = () => {
  const currentTheme = Appearance.getColorScheme();
  return currentTheme === 'dark';
};

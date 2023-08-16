import { isDarkMode } from 'src/utils/native';

export const initialThemeState: ThemeTypeState = {
  mainColor: null,
  darkTheme: isDarkMode(),
};

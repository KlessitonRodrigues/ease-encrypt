import { isDarkMode } from 'src/utils/native';

export const initialGlobalState: GlobalState = {
  darkTheme: isDarkMode(),
};

import Router from './UI/router';
import { GlobalProvider } from './hooks/useGlobalContext';
import { LanguageProvider } from './hooks/useLangContext';
import { RoutesProvider } from './hooks/useRoutesContext';
import { ThemeTypeProvider } from './hooks/useThemeTypeContext';

const App = () => {
  return (
    <GlobalProvider>
      <LanguageProvider>
        <ThemeTypeProvider>
          <RoutesProvider>
            <Router />
          </RoutesProvider>
        </ThemeTypeProvider>
      </LanguageProvider>
    </GlobalProvider>
  );
};

export default App;

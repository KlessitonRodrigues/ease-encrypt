import Router from './UI/router';
import { GlobalProvider } from './hooks/useGlobalContext';
import { LanguageProvider } from './hooks/useLangContext';
import { RouteProvider } from './hooks/usePathContext';
import { ThemeTypeProvider } from './hooks/useThemeTypeContext';

const App = () => {
  return (
    <GlobalProvider>
      <LanguageProvider>
        <ThemeTypeProvider>
          <RouteProvider>
            <Router />
          </RouteProvider>
        </ThemeTypeProvider>
      </LanguageProvider>
    </GlobalProvider>
  );
};

export default App;

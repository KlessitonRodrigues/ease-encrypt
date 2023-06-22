import Router from './UI/router';
import { GlobalProvider } from './hooks/useGlobalContext';
import { LanguageProvider } from './hooks/useLangContext';
import { RouteProvider } from './hooks/usePathContext';
<<<<<<< HEAD
import { ThemeTypeProvider } from './hooks/useThemeTypeContext';
=======
>>>>>>> master

const App = () => {
  return (
    <GlobalProvider>
      <LanguageProvider>
<<<<<<< HEAD
        <ThemeTypeProvider>
          <RouteProvider>
            <Router />
          </RouteProvider>
        </ThemeTypeProvider>
=======
        <RouteProvider>
          <Router />
        </RouteProvider>
>>>>>>> master
      </LanguageProvider>
    </GlobalProvider>
  );
};

export default App;

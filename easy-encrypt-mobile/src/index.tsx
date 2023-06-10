import Router from './UI/router';
import { GlobalProvider } from './hooks/useGlobalContext';
import { LanguageProvider } from './hooks/useLangContext';
import { RouteProvider } from './hooks/usePathContext';

const App = () => {
  return (
    <GlobalProvider>
      <LanguageProvider>
        <RouteProvider>
          <Router />
        </RouteProvider>
      </LanguageProvider>
    </GlobalProvider>
  );
};

export default App;

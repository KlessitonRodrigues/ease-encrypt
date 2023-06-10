import Router from './UI/router';
import { GlobalProvider } from './hooks/useGlobalContext';
import { RouteProvider } from './hooks/usePathContext';

const App = () => {
  return (
    <GlobalProvider>
      <RouteProvider>
        <Router />
      </RouteProvider>
    </GlobalProvider>
  );
};

export default App;

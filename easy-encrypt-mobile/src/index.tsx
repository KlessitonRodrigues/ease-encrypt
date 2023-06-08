import Router from './UI/router';
import { GlobalProvider } from './hooks/useGlobalContext';

const App = () => {
  return (
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  );
};

export default App;

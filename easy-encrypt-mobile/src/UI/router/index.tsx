import useGlobalContext from 'src/hooks/useGlobalContext';

import HomePage from '../pages/Home';
import SettingsPage from '../pages/Settings';

const Router = () => {
  const [global, setGlobal] = useGlobalContext();

  switch (global.path) {
    case '/home':
      return <HomePage />;
    case '/settings':
      return <SettingsPage />;
    default:
      return <HomePage />;
  }
};

export default Router;

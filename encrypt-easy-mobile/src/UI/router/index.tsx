import usePathContext from 'src/hooks/useRoutesContext';

import HomePage from '../pages/Home';

const Router = () => {
  const { path, setPath } = usePathContext();

  switch (path) {
    case '/home':
      return <HomePage />;
    default:
      return <HomePage />;
  }
};

export default Router;

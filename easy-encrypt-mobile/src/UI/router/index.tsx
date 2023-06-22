import usePathContext from 'src/hooks/usePathContext';

import HomePage from '../pages/Home';

const Router = () => {
  const [path] = usePathContext();

  switch (path.address) {
    case '/home':
      return <HomePage />;
    default:
      return <HomePage />;
  }
};

export default Router;

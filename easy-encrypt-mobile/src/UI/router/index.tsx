import usePathContext from 'src/hooks/usePathContext';

import HomePage from '../pages/Home';
import IntroPage from '../pages/Intro';

const Router = () => {
  const [path] = usePathContext();

  switch (path.address) {
    case '/home':
      return <HomePage />;
    case '/intro':
      return <IntroPage />;
    default:
      return <IntroPage />;
  }
};

export default Router;

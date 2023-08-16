import { controllers } from './controllers';

const clientInit = (): AppClient => {
  return controllers();
};

export default clientInit;

import React from 'react';

import { initialGlobalState } from './state';

const globalContext = React.createContext<GlobalContext>([initialGlobalState, () => {}]);

export const GlobalProvider = (props: React.PropsWithChildren) => (
  <globalContext.Provider value={React.useState(initialGlobalState)}>
    {props.children}
  </globalContext.Provider>
);

export default () => React.useContext(globalContext);

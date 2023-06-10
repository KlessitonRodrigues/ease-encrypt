import React from 'react';

const initialPath: PathState = { address: '/home' };
const pathContext = React.createContext<PathContext>([initialPath, () => {}]);

export const RouteProvider = (props: React.PropsWithChildren) => (
  <pathContext.Provider value={React.useState(initialPath)}>{props.children}</pathContext.Provider>
);

export default () => React.useContext(pathContext);

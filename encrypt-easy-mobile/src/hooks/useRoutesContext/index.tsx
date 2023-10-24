import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext<UseRoutesContext>(null);

export const RoutesProvider = (props: PropsWithChildren) => {
  const [path, setPath] = useState<Paths>('games/list/bar');
  const [lang, setLang] = useState('');

  const context: UseRoutesContext = {
    path,
    lang,
    setPath,
    setLang,
  };

  const value = useMemo(() => context, [path, lang]);
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default () => useContext(AppContext);

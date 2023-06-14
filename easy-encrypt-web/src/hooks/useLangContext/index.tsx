import { PropsWithChildren, createContext, useContext, useState } from 'react';

import { initialLangState } from './state';

const PathContext = createContext<MobileLangContext>([initialLangState, () => {}]);

export const LanguageProvider = (props: PropsWithChildren) => (
  <PathContext.Provider value={useState(initialLangState)}>{props.children}</PathContext.Provider>
);

export default () => useContext(PathContext);

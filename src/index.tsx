import { createContext, FunctionComponent, ReactNode, useContext } from 'react';

export default function createContextHook<T>(
  contextInitializer: () => T,
  defaultValue?: T,
): [Context: FunctionComponent<{ children: ReactNode }>, useHook: () => T] {
  const Context = createContext<T | undefined>(defaultValue);

  return [
    ({ children }: { children: ReactNode }) => (
      <Context.Provider value={contextInitializer()}>
        {children}
      </Context.Provider>
    ),
    () => useContext(Context) as T,
  ];
}

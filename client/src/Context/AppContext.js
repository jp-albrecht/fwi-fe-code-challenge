import React, { createContext, useState } from 'react';

export const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [sortByHighest, setSortByHighest] = useState(true);

  return (
    <AppContext.Provider
      value={{ open, setOpen, sortByHighest, setSortByHighest }}
    >
      {children}
    </AppContext.Provider>
  );
}

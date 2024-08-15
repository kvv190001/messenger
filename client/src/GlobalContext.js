import React, { createContext, useContext, useState } from 'react';

// Create Context
const GlobalContext = createContext();

// Create a Provider Component
export function GlobalProvider({ children }) {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com'
  });

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Custom Hook for using context
export function useGlobal() {
  return useContext(GlobalContext);
}
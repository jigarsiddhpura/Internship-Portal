import React, { createContext, useState } from 'react';

// Create a new context
const AppContext = createContext({ selectedTags: [], setSelectedTags: () => {} });

// Create a context provider component to wrap the entire application
export const AppProvider = ({ children }) => {
    const [selectedTags, setSelectedTags] = useState([]);

  return (
    <AppContext.Provider value={{ selectedTags, setSelectedTags }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

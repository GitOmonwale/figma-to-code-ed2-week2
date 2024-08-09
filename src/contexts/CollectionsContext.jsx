import React, { createContext, useState, useEffect } from 'react';

const CollectionsContext = createContext();

export const CollectionsProvider = ({ children }) => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const response = await fetch('https://mock.shop/api?query={collections(first:%2010){edges%20{cursor%20node%20{id%20handle%20title%20description%20image%20{id%20url}}}}}');
      const data = await response.json();
      setCollections(data.data.collections.edges);
    };

    fetchCollections();
  }, []);

  return (
    <CollectionsContext.Provider value={{ collections }}>
      {children}
    </CollectionsContext.Provider>
  );
};

export default CollectionsContext;

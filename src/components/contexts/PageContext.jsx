import { createContext, useContext, useState, useEffect } from 'react';

const PageContext = createContext();

export const usePage = () => useContext(PageContext);

export const PageProvider = ({ children }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  function selectItemByClick(itemId) {
    setSelectedItemId(itemId);
    console.log(`addet item by id (${itemId}) to context`);
  }
  function clearItemByClick(itemId) {
    setSelectedItemId(null);
    console.log(` deleted ${itemId}`);
  }

  useEffect(() => {
    console.log('from context',selectedItemId);
  }, [selectedItemId]);

  return (
    <PageContext.Provider
      value={{ selectItemByClick, clearItemByClick, selectedItemId }}
    >
      {children}
    </PageContext.Provider>
  );
};

import { useContext, createContext } from 'react';

export const BlockCNTXT = createContext();
export const useBlock = () => useContext(BlockCNTXT);

const BlockContext = ({ children }) => {
  const blockName = 'blockName';
  return (
    <BlockCNTXT.Provider value={{ blockName }}>{children}</BlockCNTXT.Provider>
  );
};

export default BlockContext;

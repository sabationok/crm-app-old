import { useContext, createContext } from 'react';

export const RowCNTXT = createContext();
export const useRow = () => useContext(RowCNTXT);

const RowContext = ({ children, rowIdx, rowData }) => {
  return (
    <RowCNTXT.Provider value={{ rowData, rowIdx }}>
      <>{children}</>
    </RowCNTXT.Provider>
  );
};

export default RowContext;

import { useContext, createContext, useState, useEffect } from 'react';
import cloneDeep from 'lodash.clonedeep';
import { useSelector } from 'react-redux';
import { selectOrders } from 'redux/selectors';
import { applyFounder } from 'components/BlockWithList/BlockUtils/founder';
import ts from './BlockTable.module.scss';

export const TableCNTXT = createContext();
export const useTable = () => useContext(TableCNTXT);

const TableContext = ({ children, value }) => {
  const {
    tableParams: { tableTitles, tableData },
  } = value;

  const { searchQuery, searchParam } = useSelector(selectOrders);
  const [selectedAll, setSelectedAll] = useState(false);
  const [tableDataCloned, setTableDateCloned] = useState([]);
  const [foundedPosts, setFoundedPosts] = useState([]);
  const rowGrid = {
    display: 'grid',
    // gridTemplateColumns: `repeat(${tableTitles.length}, max-content)`,
    gridTemplateColumns: `repeat(${tableTitles.length}, auto)`
  };

  useEffect(() => {
    if (tableData.length !== 0) {
      setTableDateCloned(cloneDeep(tableData));
      return;
    }
  }, [tableData]);

  useEffect(() => {
    setFoundedPosts(
      applyFounder({
        searchParam: searchParam,
        searchQuery: searchQuery,
        data: tableDataCloned,
      })
    );
  }, [searchParam, searchQuery, tableDataCloned]);

  return (
    <TableCNTXT.Provider
      value={{
        ts,
        ...value,
        rowGrid,
        tableTitles: tableTitles,
        setSelectedAll: setSelectedAll,
        selectedAll: selectedAll,
        visiblePosts: foundedPosts,
      }}
    >
      {children}
    </TableCNTXT.Provider>
  );
};

export default TableContext;

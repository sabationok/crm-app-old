import { createContext, useContext, useState } from 'react';
import { productsArray } from 'data/products';
const BlockWithListContext = createContext();

export const useBlockWithList = () => useContext(BlockWithListContext);

export const BlockWithListProvider = ({ children }) => {
  const loadedArr = [...productsArray];
  const [visibleList, setVisibleList] = useState([]);
  const [selectedRowsList, setSelectedRowsList] = useState([]);
  const [filterActive, setFilterActive] = useState(false);

  function forFilterList(searchQuery) {
    if (searchQuery === '') {
      setVisibleList(loadedArr);
      setFilterActive(false);
      return;
    }
    setVisibleList(loadedArr.filter(el => el.data.sku.includes(searchQuery)));
    setFilterActive(true);
    console.log('rerender fliter', searchQuery);
  }
  function addRowBySku(sku) {
    console.log('add', sku);
    if (selectedRowsList.includes(sku) && sku) {
      return alert('id already added');
    }
    setSelectedRowsList([...selectedRowsList, sku]);
  }
  function deleteRowBySku(sku) {
    setSelectedRowsList(selectedRowsList.filter(el => el !== sku));
    console.log('del', sku);
  }

  return (
    <BlockWithListContext.Provider
      value={{
        visibleList,
        forFilterList,
        filterActive,
        setFilterActive,
        selectedRowsList,
        addRowBySku,
        deleteRowBySku,
      }}
    >
      {children}
    </BlockWithListContext.Provider>
  );
};

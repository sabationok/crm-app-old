import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import cloneDeep from 'lodash.clonedeep';

import { useSelector } from 'react-redux';
import { selectPosts} from 'redux/selectors';
import { applyFounder } from 'components/BlockWithList/BlockUtils/founder';

import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';

import css from './BlockTable.module.css';

const BlockTable = ({ titlesArr,tableParams }) => {
  const {tableTitles,tableData}=tableParams
  const { searchQuery, searchParam } = useSelector(selectPosts);
  const [selectedAll, setSelectedAll] = useState(false);
  const [tableDataCloned, setTableDateCloned] = useState([]);
  const [foundedPosts, setFoundedPosts] = useState([]);

  useEffect(() => {
    if (tableData.length !== 0) {
      setTableDateCloned(cloneDeep(tableData));
      return;
    }
  }, [tableData]);

  useEffect(() => {
    setFoundedPosts(applyFounder({
      searchParam: searchParam,
      searchQuery: searchQuery,
      data: tableDataCloned,
    }))
  }, [searchParam, searchQuery, tableDataCloned]);

  return (
    <table className={[css.table, css.orders]}>
      <TableHead
        titles={tableTitles}
        setSelectedAll={setSelectedAll}
        selectedAll={selectedAll}
      />
      <TableBody
        titles={tableTitles}
        tableData={foundedPosts}
        selectedAll={selectedAll}
      />
    </table>
  );
};

BlockTable.propTypes = {};

export default BlockTable;

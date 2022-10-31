import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import cloneDeep from 'lodash.clonedeep';

import { useSelector } from 'react-redux';
import { selectPosts, selectPostsBlock } from 'redux/selectors';

import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';

import css from './BlockTable.module.css';

const BlockTable = ({ titlesArr }) => {
  const { posts } = useSelector(selectPosts);
  const { searchQuery } = useSelector(selectPostsBlock);
  const [selectedAll, setSelectedAll] = useState(false);
  const [tableData, setTableDate] = useState([]);
  const [foundedPosts, setFoundedPosts] = useState([]);

  useEffect(() => {
    if (posts !== []) {
      setTableDate(cloneDeep(posts));
      return;
    }
  }, [posts]);

  useEffect(() => {
    function applyFilter() {
      setFoundedPosts(
        tableData.filter(
          ({ name }) =>
            !(
              searchQuery &&
              !name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        )
      );
    }
    applyFilter();
  }, [searchQuery, tableData]);

  return (
    <table className={[css.table, css.orders]}>
      <TableHead
        titles={titlesArr}
        setSelectedAll={setSelectedAll}
        selectedAll={selectedAll}
      />
      <TableBody
        titles={titlesArr}
        tableData={foundedPosts}
        selectedAll={selectedAll}
      />
    </table>
  );
};

BlockTable.propTypes = {};

export default BlockTable;

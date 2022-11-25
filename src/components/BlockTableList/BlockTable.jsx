import React from 'react';
// import PropTypes from 'prop-types';

import TableContext from './TableContext';

import TableHead from './TableHead';
import TableBody from './TableBody';

import scss from './BlockTable.module.scss';

const BlockTable = ({ titlesArr, tableParams }) => {
  return (
    <TableContext
      value={{
        tableParams: tableParams,
      }}
    >
      <div className={[scss.table, scss.orders]}>
        <TableHead/>
        <TableBody/>
      </div>
    </TableContext>
  );
};

BlockTable.propTypes = {};

export default BlockTable;

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';

import css from './BlockTable.module.css';

const BlockTable = ({ titlesArr}) => {
  
  return (
    <table className={[css.table, css.orders]}>
      <TableHead
        arr={titlesArr}
        // selectedList={selectedList}
        // setSelectedList={setSelectedList}
      />
      <TableBody
        // arr={dataArr}
        // selectedList={selectedList}
        // setSelectedList={setSelectedList}
      />
    </table>
  );
};

BlockTable.propTypes = {};

export default BlockTable;

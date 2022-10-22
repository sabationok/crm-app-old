import React from 'react';
// import PropTypes from 'prop-types';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';
import { tableColTitles } from './TableColTitles';
import { productsArray } from 'data/products';

import css from './BlockTable.module.css';

const BlockTable = props => {
  return (
    <div className={[css.table, css.orders]}>
      <TableHead arr={tableColTitles} />
      <TableBody arr={productsArray}/>
    </div>
  );
};

BlockTable.propTypes = {};

export default BlockTable;

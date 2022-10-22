import React from 'react';
// import PropTypes from 'prop-types';
import TableBodyRow from './TableBodyRow/TableBodyRow';
import css from './TableBody.module.css';

const TableBody = ({ arr }) => {
  // console.log(arr);
  return (
    <div className={css.tbody}>
      {arr.map(el => <TableBodyRow key={el.id} obj={el}/>)}
    </div>
  );
};

TableBody.propTypes = {};

export default TableBody;

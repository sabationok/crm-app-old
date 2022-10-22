import React from 'react';
// import PropTypes from 'prop-types';
import css from './TableBodyRow.module.css';
import TableBodyCol from './TableBodyCol/TableBodyCol';

const TableBodyRow = ({ obj }) => {
  // const arrKeys = Object.keys(obj);
  const arrValues = Object.values(obj.data);

  return (
    <>
      <div className={css.row}>
        <div className={[css.col, css.td_col_checkbox].join(' ')}>
          <input type="checkbox" />
        </div>
        {arrValues.map((el, i) => {
          return <TableBodyCol key={i} text={el} i={i} />;
        })}
      </div>
    </>
  );
};

TableBodyRow.propTypes = {};

export default TableBodyRow;

import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import css from './TableBodyCol.module.css';

const TableBodyCol = ({ text, i }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className={[css.col, css[`tdCol_${(i += 1)}`]].join(' ')}
      onMouseEnter={() => {
        setShowInfo(true)
      }}
      onMouseLeave={() => {
        setShowInfo(false)
      }}
    >
      <span className={css.text}>{text}</span>
      {/* {text} */}
      
      {showInfo && <span className={css.hint}>{text}</span>}
    </div>
  );
};

TableBodyCol.propTypes = {};

export default TableBodyCol;

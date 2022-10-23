import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import css from './TableBodyCol.module.css';

const TableBodyCol = ({ name, text, i }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <td
      className={[css.col, css[`tdCol_${(i += 1)}`]].join(' ')}
      onMouseEnter={() => {
        setShowInfo(true);
      }}
      onMouseLeave={() => {
        setShowInfo(false);
      }}
    >
      <span className={css.text}>{text}</span>

      {showInfo &&
        (name === 'sku' ? (
          <a className={css.hintLink} href="./">
            {text}
          </a>
        ) : (
          <span className={css.hint}>{text}</span>
        ))}
    </td>
  );
};

TableBodyCol.propTypes = {};

export default TableBodyCol;

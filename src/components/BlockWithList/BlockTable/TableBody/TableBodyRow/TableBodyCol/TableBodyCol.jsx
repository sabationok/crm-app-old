import React from 'react';
// import PropTypes from 'prop-types';

import css from './TableBodyCol.module.css';

const TableBodyCol = ({ dataTitle, text, i, data = '---' }) => {
  // const [showInfo, setShowInfo] = useState(false);

  return (
    <td
      className={[css.col, css[`tdCol_${(i += 1)}`]].join(' ')}
      // onMouseEnter={() => {
      //   setShowInfo(true);
      // }}
      // onMouseLeave={() => {
      //   setShowInfo(false);
      // }}
    >
      <span className={css.text}>{data}</span>
      {/* {showInfo && <span className={css.hint}>{text}</span>} */}
    </td>
  );
};

TableBodyCol.propTypes = {};

export default TableBodyCol;

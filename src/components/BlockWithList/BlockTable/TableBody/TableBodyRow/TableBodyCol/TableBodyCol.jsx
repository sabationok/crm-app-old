import React from 'react';
// import PropTypes from 'prop-types';

import scss from './TableBodyCol.module.scss';

const TableBodyCol = ({ dataTitle, text, i, data = '---' }) => {
  // const [showInfo, setShowInfo] = useState(false);

  return (
    <td
      className={[scss.col, scss[`tdCol_${(i += 1)}`]].join(' ')}
      // onMouseEnter={() => {
      //   setShowInfo(true);
      // }}
      // onMouseLeave={() => {
      //   setShowInfo(false);
      // }}
    >
      <span className={scss.text}>{data}</span>
      {/* {showInfo && <span className={css.hint}>{text}</span>} */}
    </td>
  );
};

TableBodyCol.propTypes = {};

export default TableBodyCol;

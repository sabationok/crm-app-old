import React from 'react';
// import PropTypes from 'prop-types';
// import { useRow } from '../TableBodyRow/RowContext';

import s from './TableCells.module.scss';

const CellTitle = ({ title, idx, className = '' }) => {
  const classNames = [s.title, s[title?.action], ...className].join(' ');
  const style = {
    width: `${title.width}px`,
  };

  return (
    <div style={style} className={classNames}>
      {title?.name || 'Empty'}
    </div>
  );
};

CellTitle.propTypes = {};

export default CellTitle;

import React from 'react';
// import PropTypes from 'prop-types';
import { useRow } from '../TableRows/RowContext';

import s from './TableCells.module.scss';

const CellString = ({ title, idx, className = '' }) => {
  const { rowData } = useRow();
  const content = rowData[title?.dataTitle] || '-//-//-';
  const actionClassName = content !== '-//-//-' ? s[title?.action] : s.empty;
  const classNames = [s.coll, actionClassName, ...className].join(' ');
  const style = {
    width: `${title?.width}px`,
  };

  return (
    <div style={style} className={classNames} title={content}>
      <span className={s.cellInner}>{content}</span>
    </div>
  );
};

CellString.propTypes = {};

export default CellString;
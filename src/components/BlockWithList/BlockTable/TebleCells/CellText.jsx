import React from 'react';
// import PropTypes from 'prop-types';
import { useRow } from '../TableBodyRow/RowContext';

import s from './TableCells.module.scss';

const CellText = ({ title, idx, className = '' }) => {
  const { rowData } = useRow();
  const content = rowData[title?.action] || '---';
  const actionClassName = content !== '---' ? s[title?.action] : s.empty;
  const classNames = [s.coll, actionClassName, ...className].join(' ');

  return (
    <div className={classNames} title={content}>
      <span className={s.cellInner}>{content}</span>
    </div>
  );
};

CellText.propTypes = {};

export default CellText;

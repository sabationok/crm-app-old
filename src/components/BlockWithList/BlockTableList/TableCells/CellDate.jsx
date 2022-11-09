import React from 'react';
// import PropTypes from 'prop-types';
import { useRow } from '../TableRows/RowContext';

import s from './TableCells.module.scss';

const CellDate = ({ title, idx, className = '' }) => {
  const { rowData } = useRow();
  const content = rowData[title?.dataTitle] || '-//-//-';
  const actionClassName = content !== '-//-//-' ? s[title?.action] : s.empty;
  const classNames = [s.coll, actionClassName, ...className].join(' ');
  const style = {
    width: `${title?.width}px`,
  };

  const date = new Date(content);
  const fullYear = date.getFullYear();
  const month = 1 + date.getMonth();
  const day = date.getDate();
  const formatedDate = `${day}.${month}.${fullYear}`;
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const formatedTime = `${hours}:${minutes}:${seconds}`;
  return (
    <div
      style={style}
      className={classNames}
      title={`${formatedDate} (${formatedTime})`}
    >
      <span className={s.cellInner}>{formatedDate}</span>
    </div>
  );
};

CellDate.propTypes = {};

export default CellDate;


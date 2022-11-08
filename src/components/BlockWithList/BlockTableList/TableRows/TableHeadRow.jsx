import React from 'react';
import CellTitle from '../TableCells/CellTitle';
import { useTable } from '../TableContext';
import s from './TableRow.module.scss';
const TableHeadRow = () => {
  const { tableTitles = [], rowGrid = {} } = useTable();
  const styles = {
    ...rowGrid,
  };
  return (
    <div style={styles} className={s.thRow}>
      {tableTitles.map((title, idx) => (
        <CellTitle key={title.id} title={title} idx={idx} />
      ))}
    </div>
  );
};

export default TableHeadRow;

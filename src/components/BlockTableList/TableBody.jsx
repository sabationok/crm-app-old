import React from 'react';
import { useTable } from './TableContext';
import RowContext from './TableRows/RowContext';
import TableRow from './TableRows/TableRow';
import s from './BlockTable.module.scss';
const TableBody = () => {
  const { visiblePosts = [] } = useTable();
  return (
    <div className={s.tBody}>
      {visiblePosts.map((rowData, idx) => (
        <RowContext key={rowData.id} rowData={rowData} idx={idx}>
          <TableRow />
        </RowContext>
      ))}
    </div>
  );
};

export default TableBody;

import React from 'react';
import { useTable } from './TableContext';
import RowContext from './TableBodyRow/RowContext';
import TableRow from './TableBodyRow/TableRow';
import s from './BlockTable.module.scss';
const TableBody = () => {
  const { visiblePosts = [] } = useTable();

  visiblePosts.map(el => {
    console.log(el);
    return <></>;
  });
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

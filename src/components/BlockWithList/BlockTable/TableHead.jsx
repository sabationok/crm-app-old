import React from 'react';
import TableHeadRow from './TableBodyRow/TableHeadRow';

import s from './BlockTable.module.scss';

const TableHead = () => {
  return (
    <div className={s.tHead}>
      <TableHeadRow />
    </div>
  );
};

export default TableHead;

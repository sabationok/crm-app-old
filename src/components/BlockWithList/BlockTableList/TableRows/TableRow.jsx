import { useState } from 'react';
import { useRow } from './RowContext';
import { useTable } from '../TableContext';
import CellText from '../TableCells/CellText';
import ModalCustom from 'components/ModalCustom/ModalCustom';
import s from './TableRow.module.scss';
const TableRow = () => {
  const { tableTitles = [], rowGrid = {} } = useTable();
  const { rowData } = useRow();

  const styles = {
    ...rowGrid,
  };

  return (
    <>
      <div style={styles} className={s.row}>
        {tableTitles.map((title, idx) => (
          <CellText key={title.id} title={title} idx={idx} />
        ))}
      </div>
    </>
  );
};

export default TableRow;

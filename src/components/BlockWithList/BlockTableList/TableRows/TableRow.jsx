// import { useRow } from './RowContext';
import { useTable } from '../TableContext';
import CellText from '../TableCells/CellText';
import CellAmount from '../TableCells/CellAmount';
import CellDate from '../TableCells/CellDate';
import CellList from '../TableCells/CellList';
import CellOrderStatus from '../TableCells/CellOrderStatus';
import CellString from '../TableCells/CellString';

import s from './TableRow.module.scss';
const TableRow = () => {
  const { tableTitles = [], rowGrid = {} } = useTable();
  // const { rowData } = useRow();
  const cellActionMap = {
    date: CellDate,
    string: CellString,
    orderStatus: CellOrderStatus,
    list: CellList,
    amount: CellAmount,
    orderType: null,
    comment: null,
  };
  let Cell = CellText;
  const styles = {
    ...rowGrid,
  };

  return (
    <>
      <div style={styles} className={s.row}>
        {tableTitles.map((title, idx) => {
          if (cellActionMap[title?.action]) {
            Cell = cellActionMap[title?.action];
            return <Cell key={title.id} title={title} idx={idx} />;
          }
          return <Cell key={title.id} title={title} idx={idx} />
        })}
      </div>
    </>
  );
};

export default TableRow;

import React, { useState, useRef } from 'react';
// import PropTypes from 'prop-types';
import css from './TableBodyRow.module.scss';
import TableBodyCol from './TableBodyCol/TableBodyCol';
import { useBlockWithList } from 'components/contexts/BlockTableContext';
// import { usePage } from 'components/contexts/PageContext';

const TableBodyRow = ({ obj, onTableRowClick }) => {
  const [selected, setSelected] = useState(false);
  const { addRowBySku, deleteRowBySku } = useBlockWithList();
  // const { selectItemByClick, clearItemByClick, selectedItemId } = usePage();
  
  const itemIdRef = useRef(obj.id);
  function onCheckboxChange(ev) {
    // let { target } = ev;
    setSelected(!selected);
    if (selected) {
      deleteRowBySku(obj.data.sku);
      return;
    }
    addRowBySku(obj.data.sku);
  }
  function handleTableRowClick(ev) {
    let { target, currentTarget } = ev;
    let transferData = {
      ev: ev,
      target: target,
      currentTarget: currentTarget,
      itemId: itemIdRef.current,
    };
    onTableRowClick(transferData);
  }

  const arrKeys = Object.keys(obj.data);
  const arrValues = Object.values(obj.data);
  return (
    <>
      <tr
        className={css.row}
        onClick={ev => {
          handleTableRowClick(ev);
        }}
      >
        <td className={[css.col, css.td_col_checkbox].join(' ')}>
          <form>
            <input
              type="checkbox"
              checked={selected}
              onChange={ev => {
                onCheckboxChange(ev);
              }}
            />
          </form>
        </td>
        {arrValues.map((el, i) => {
          return <TableBodyCol key={i} name={arrKeys[i]} text={el} i={i} />;
        })}
      </tr>
    </>
  );
};

TableBodyRow.propTypes = {};

export default TableBodyRow;

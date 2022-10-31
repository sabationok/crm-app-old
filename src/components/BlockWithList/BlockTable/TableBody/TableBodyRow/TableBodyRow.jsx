import React, { useState, useRef, useEffect } from 'react';
// import PropTypes from 'prop-types';
import css from './TableBodyRow.module.scss';
import TableBodyCol from './TableBodyCol/TableBodyCol';

const TableBodyRow = ({ postData, onTableRowClick, selectedAll, titles }) => {
  const [selected, setSelected] = useState(false);
  const itemIdRef = useRef(postData.id);

  function onCheckboxChange(ev) {
    setSelected(!selected);
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

  useEffect(() => {
    if (selectedAll) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [selectedAll]);

  return (
    <tr className={css.row} onClick={handleTableRowClick}>
      <td className={[css.col, css.td_col_checkbox].join(' ')}>
        <input
          type="checkbox"
          checked={selected}
          onChange={ev => {
            onCheckboxChange(ev);
          }}
        />
      </td>
      {titles.map(el => (
        <TableBodyCol
          key={el.id}
          data={postData[el.dataTitle]}
          dataTitle={el.dataTitle}
        />
      ))}
    </tr>
  );
};

TableBodyRow.propTypes = {};

export default TableBodyRow;

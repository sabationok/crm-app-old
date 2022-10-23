import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import TableBodyRow from './TableBodyRow/TableBodyRow';
import scss from './TableBody.module.scss';
import { useBlockWithList } from 'components/contexts/BlockTableContext';
import { usePage } from 'components/contexts/PageContext';

const TableBody = () => {
  const { visibleList } = useBlockWithList();
  const { selectItemByClick } = usePage();

  const [selectedRow, setSelectedRow] = useState();
  const [prevRow, setPrevRow] = useState();
  const [selectedCol, setSelectedCol] = useState();
  const [prevCol, setPrevCol] = useState();

  function onTableRowClick({ ev, target, currentTarget, itemId }) {
    setSelectedRow(currentTarget);
    setSelectedCol(target);
    selectItemByClick(itemId);

    currentTarget.classList.add(scss.selectedRow);
    target.classList.add(scss.selectedCol);
  }

  useEffect(() => {
    setPrevCol(selectedCol);
    if (selectedCol === prevCol) {
      return;
    }
    if (selectedCol !== prevCol) {
      prevCol?.classList.remove(scss.selectedCol);
    }
  }, [prevCol, selectedCol]);

  useEffect(() => {
    setPrevRow(selectedRow);
    if (selectedRow === prevRow) {
      return;
    }
    if (selectedRow !== prevRow) {
      prevRow?.classList.remove(scss.selectedRow);
    }
  }, [prevRow, selectedRow]);

  return (
    <tbody className={scss.tbody}>
      {visibleList.map(el => (
        <TableBodyRow
          key={el.id}
          obj={el}
          onTableRowClick={ev => {
            onTableRowClick(ev);
          }}
        />
      ))}
    </tbody>
  );
};

TableBody.propTypes = {};

export default TableBody;

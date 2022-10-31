import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { actionSelectPostByClick } from 'redux/actions/postsActions';

import TableBodyRow from './TableBodyRow/TableBodyRow';
import scss from './TableBody.module.scss';

const TableBody = ({ tableData, titles, selectedAll }) => {
  const [prevRow, setPrevRow] = useState();
  const [prevCol, setPrevCol] = useState();
  const [selectedRow, setSelectedRow] = useState();
  const [selectedCol, setSelectedCol] = useState();
  const dispatch = useDispatch();

  function onTableRowClick({ ev, target, currentTarget, itemId }) {
    setSelectedRow(currentTarget);
    setSelectedCol(target);
    dispatch(actionSelectPostByClick(itemId));

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
      {tableData.map(el => (
        <TableBodyRow
          key={el.id}
          postData={el}
          titles={titles}
          selectedAll={selectedAll}
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

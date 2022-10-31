import React from 'react';
// import PropTypes from 'prop-types';

import css from './TableHead.module.scss';

const TableHead = ({ titles, setSelectedAll, selectedAll }) => {
  function onHeadCheckboxChange() {
    setSelectedAll(!selectedAll);
  }
  return (
    <thead className={css.thead}>
      <tr className={css.row}>
        <th className={css.col}>
          <input
            className={css.checkbox}
            type="checkbox"
            onChange={onHeadCheckboxChange}
          />
        </th>
        {titles.map(({ id, name, dataTitle }, i) => {
          return (
            <th
              key={id}
              className={[css.col, css[`td_col${(i += 1)}`]].join(' ')}
              data-title={dataTitle}
            >{`${(i += 1)} ${name}`}</th>
          );
        })}
      </tr>
    </thead>
  );
};

TableHead.propTypes = {};

export default TableHead;

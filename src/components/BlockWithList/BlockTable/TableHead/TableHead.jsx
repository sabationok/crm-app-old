import React from 'react';
// import PropTypes from 'prop-types';

import css from './TableHead.module.css';

const TableHead = ({ arr }) => {

  return (
    <div className={css.thead}>
      <div className={css.thRow}>
        <div className={[css.col, css.td_col_checkbox].join(' ')}>
          <input type="checkbox" />
        </div>
        {arr.map(({ id, name, dataTitle }, i) => {
          return (
            <div
              key={id}
              className={[css.col, css[`td_col${(i += 1)}`]].join(' ')}
              data-title={dataTitle}
            >{`${(i += 1)} ${name}`}</div>
          );
        })}
      </div>
    </div>
  );
};

TableHead.propTypes = {};

export default TableHead;

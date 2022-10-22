import React from 'react';
// import PropTypes from 'prop-types';

import BlockListFilter from './BlockListFilter/BlockListFilter';
import BlockTable from './BlockTable/BlockTable';

import css from './BlockWithList.module.scss';
console.log(css);

const BlockWithList = props => {
  // const loadedArr = [];
  // const [visibleArr, setVisibleArr] = useState(loadedArr);
  return (
    <div className={css.block}>
      <div className={css.header}>
        <BlockListFilter></BlockListFilter>
      </div>
      <div className={css.content}>
        <div className={css.overflow}>
          <BlockTable></BlockTable>
        </div>
      </div>
      <div className={css.footer}></div>
    </div>
  );
};

BlockWithList.propTypes = {};

export default BlockWithList;

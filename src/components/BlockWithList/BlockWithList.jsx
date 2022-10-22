import React, { useState } from 'react';
import PropTypes from 'prop-types';

import BlockListFilter from './BlockListFilter/BlockListFilter';
import BlockTable from './BlockTable/BlockTable';

import css from './BlockWithList.module.css';

const BlockWithList = props => {
  const loadedArr = [];
  const [visibleArr, setVisibleArr] = useState(loadedArr);
  return (
    <div className={css.block}>
      <div className={css.blockHeader}>
        <BlockListFilter></BlockListFilter>
      </div>
      <div className={css.blockContent}>
        <div className={css.blockOverflow}>
          <BlockTable></BlockTable>
        </div>
      </div>
      <div className={css.blockFooter}></div>
    </div>
  );
};

BlockWithList.propTypes = {};

export default BlockWithList;

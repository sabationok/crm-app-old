import React from 'react';
import BlockListFilter from './BlockListFilter/BlockListFilter';
import BlockTable from './BlockTableList/BlockTable';

import BlockContext from './BlockContext';

import css from './BlockWithList.module.scss';

const BlockWithList = ({ settings }) => {
  const {
    blockParams: { blockFilter = false, blockTable = false },
    blockTableParams,
    blockFilterParams,
  } = settings;
  return (
    <BlockContext>
      <div className={css.block}>
        <div className={css.header}>
          {blockFilter && (
            <BlockListFilter blockFilterParams={blockFilterParams} />
          )}
        </div>
        <div className={css.content}>
          <form className={css.overflow}>
            {blockTable && <BlockTable tableParams={blockTableParams} />}
          </form>
        </div>
        <div className={css.footer}></div>
      </div>
    </BlockContext>
  );
};

export default BlockWithList;

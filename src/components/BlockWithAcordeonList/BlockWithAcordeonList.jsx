import React from 'react';
import BlockListFilter from './BlockListFilter/BlockListFilter';
import BlockTable from './BlockTableList/BlockTable';

import BlockContext from './BlockContext';

import css from './BlockWithAcordeonList.module.scss';

const BlockWithAcordeonList = ({ settings }) => {
  const {
    blockParams: { blockFilter = false, blockTable = false },
    blockTableParams,
    blockTableParams: { tableTitles = [] },
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
            {blockTable && (
              <BlockTable
                titlesArr={tableTitles}
                tableParams={blockTableParams}
              />
            )}
          </form>
        </div>
        <div className={css.footer}></div>
      </div>
    </BlockContext>
  );
};


export default BlockWithAcordeonList;

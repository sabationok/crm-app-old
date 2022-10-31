import React from 'react';
// import PropTypes from 'prop-types';

import BlockListFilter from './BlockListFilter/BlockListFilter';
import BlockTable from './BlockTable/BlockTable';
import { tableColTitles } from './BlockTable/TableColTitles';
// import { useBlockWithList } from 'components/contexts/TableContext';

import css from './BlockWithList.module.scss';

const BlockWithList = () => {
  return (
    <div className={css.block}>
      <div className={css.header}>
        <BlockListFilter />
        <div id={'blockNotif'}></div>
      </div>
      <div className={css.content}>
        <form className={css.overflow}>
          <BlockTable titlesArr={tableColTitles}/>
        </form>
      </div>
      <div className={css.footer}></div>
    </div>
  );
};

BlockWithList.propTypes = {};

export default BlockWithList;

import React from 'react';
// import PropTypes from 'prop-types'
import BlockWithList from 'components/BlockWithList/BlockWithList';
import Block from 'components/Block/Block';
import { BlockWithListProvider } from 'components/contexts/BlockTableContext';
import { PageProvider } from 'components/contexts/PageContext';

import scss from './ProductsPage.module.scss';

const ProductsPage = props => {
  return (
    <PageProvider>
      <div className={scss.pageFlex}>
        <section className={scss.sectionTopFlex}>
          <BlockWithListProvider>
            <BlockWithList></BlockWithList>
          </BlockWithListProvider>
        </section>
        <section className={scss.sectionBottomFlex}>
          <Block></Block>
          <Block></Block>
        </section>
      </div>
    </PageProvider>
  );
};

// ProductsPage.propTypes = {}

export default ProductsPage;

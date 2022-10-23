import React from 'react';
// import PropTypes from 'prop-types'
import BlockWithList from 'components/BlockWithList/BlockWithList';
import { BlockWithListProvider } from 'components/contexts/TableContext';
import { PageProvider } from 'components/contexts/PageContext';

import css from './ProductsPage.module.css';

const ProductsPage = props => {
  return (
    <PageProvider>
      <div className={css.pageFlex}>
        <section className={css.sectionTopFlex}>
          <BlockWithListProvider>
            <BlockWithList></BlockWithList>
          </BlockWithListProvider>
        </section>
        {/* <section className={css.sectionBottomFlex}>
        <BlockWithListProvider>
          <BlockWithList></BlockWithList>
        </BlockWithListProvider>
        <BlockWithListProvider>
          <BlockWithList></BlockWithList>
        </BlockWithListProvider>
      </section> */}
      </div>
    </PageProvider>
  );
};

// ProductsPage.propTypes = {}

export default ProductsPage;

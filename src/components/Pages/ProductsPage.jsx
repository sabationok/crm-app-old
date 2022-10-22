import React from 'react';
// import PropTypes from 'prop-types'
import BlockWithList from 'components/BlockWithList/BlockWithList';

import css from './ProductsPage.module.css';

const ProductsPage = props => {
  return (
    <div className={css.pageFlex}>
      <section className={css.sectionTopFlex}>
        <BlockWithList></BlockWithList>
      </section>
      <section className={css.sectionBottomFlex}>
        <BlockWithList></BlockWithList>
        <BlockWithList></BlockWithList>
      </section>
    </div>
  );
};

// ProductsPage.propTypes = {}

export default ProductsPage;

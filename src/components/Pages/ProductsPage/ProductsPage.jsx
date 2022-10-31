import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import BlockWithList from 'components/BlockWithList/BlockWithList';
import Block from 'components/Block/Block';
import { BlockWithListProvider } from 'components/contexts/BlockTableContext';
import { PageProvider } from 'components/contexts/PageContext';
import { useDispatch } from 'react-redux';
// import { selectPosts } from 'redux/selectors';
import { fetchAllPosts } from 'redux/thunks/postsThunks';

import scss from './ProductsPage.module.scss';

const ProductsPage = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);
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

ProductsPage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ProductsPage;

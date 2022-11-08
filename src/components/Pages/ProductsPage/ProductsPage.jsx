import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BlockWithList from 'components/BlockWithList/BlockWithList';
import Block from 'components/Block/Block';
// import ModalPortal from 'components/ModalPortal/ModalPortal';
import { PageProvider } from 'contexts/PageContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts } from 'redux/thunks/postsThunks';
import { selectPosts } from 'redux/selectors';
import { actionChangeSearchQuery } from 'redux/actions/postsActions';
import { actionChangeSearchParam } from 'redux/actions/postsActions';
import { productsTableTitles } from 'components/Pages/ProductsPage/productsTableTitles';

import scss from './ProductsPage.module.scss';

const ProductsPage = props => {
  const { posts } = useSelector(selectPosts);
  const dispatch = useDispatch();
  const blockParams = {
    blockFilter: true,
    blockTable: true,
    pageSelector: selectPosts,
  };
  const blockFilterParams = {
    tableTitles: productsTableTitles,
    searchQueryAction: actionChangeSearchQuery,
    searchParamAction: actionChangeSearchParam,
  };
  const blockTableParams = {
    tableTitles: productsTableTitles,
    tableData: posts,
  };

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);
  return (
    <PageProvider>
      <div className={scss.pageFlex}>
        <section className={scss.sectionTopFlex}>
          <BlockWithList
            settings={{
              blockParams: blockParams,
              blockTableParams: blockTableParams,
              blockFilterParams: blockFilterParams,
            }}
          />
        </section>
        <section className={scss.sectionBottomFlex}>
          <Block />
          <Block />
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
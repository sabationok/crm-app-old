import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BlockWithList from 'components/BlockWithList/BlockWithList';
// import BlockWithA
import Block from 'components/Block/Block';
import { PageProvider } from 'contexts/PageContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts } from 'redux/posts/postsThunks';
import { selectPosts } from 'redux/selectors';
import { actionChangeSearchQuery } from 'redux/posts/postsActions';
import { actionChangeSearchParam } from 'redux/posts/postsActions';
import { productsTableTitles } from 'data/productsTableTitles';

import scss from './PageStatistics.module.scss';

const PageStatistics = props => {
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

PageStatistics.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PageStatistics;

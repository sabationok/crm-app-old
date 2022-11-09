import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BlockWithList from 'components/BlockWithList/BlockWithList';
import Block from 'components/Block/Block';
import { PageProvider } from 'contexts/PageContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllOrders } from 'redux/orders/ordersThunks';
import { selectOrders } from 'redux/selectors';
import { actionChangeSearchQuery,actionChangeSearchParam } from 'redux/orders/ordersActions';

import { ordersTableTitles } from 'data/ordersTableTitles';

import scss from './OrdersPage.module.scss';

const ProductsPage = props => {
  const {orders} = useSelector(selectOrders);

  const dispatch = useDispatch();
  const blockParams = {
    blockFilter: true,
    blockTable: true,
    pageSelector: selectOrders,
  };
  const blockFilterParams = {
    tableTitles: ordersTableTitles,
    searchQueryAction: actionChangeSearchQuery,
    searchParamAction: actionChangeSearchParam,
  };
  const blockTableParams = {
    tableTitles: ordersTableTitles,
    tableData: orders,
  };

  useEffect(() => {
    dispatch(fetchAllOrders());
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

import React, { useEffect } from 'react';
// import PropTypes from 'prop-types'
import BlockWithList from 'components/BlockWithList/BlockWithList';
import Block from 'components/Block/Block';
import { PageProvider } from 'contexts/PageContext';
import { useDispatch } from 'react-redux';
// import ModalPortal from 'components/ModalPortal/ModalPortal';
// import AppLoader from 'components/AppLoader/AppLoader';
// import { selectOrders } from 'redux/selectors';
// import { fetchAllOrders } from 'redux/thunks/OrdersThunks';

import scss from './OrdersPage.module.scss';

const ProductsPage = props => {
  const dispatch = useDispatch();

  const blockParams = {
    blockFilter: true,
    blockTable: true,
    pageSelector: null,
  };
  const blockFilterParams = {tableTitles: [],searchAction:null,searchParamAction:null};
  const blockTableParams = { tableTitles: [], tableData: [] };

  useEffect(() => {
  }, [dispatch]);
  return (
    <PageProvider>
      <div className={scss.pageFlex}>
        <section className={scss.sectionTopFlex}>
        <BlockWithList settings={{
              blockParams: blockParams,
              blockTableParams: blockTableParams,
              blockFilterParams: blockFilterParams,
            }}/>
        </section>
        <section className={scss.sectionBottomFlex}>
          <Block />
          <Block />
        </section>
      </div>
    </PageProvider>
  );
};

// ProductsPage.propTypes = {}

export default ProductsPage;

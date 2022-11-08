import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import MainPage from './Pages/MainPage/MainPage';
// import ProductsPage from './Pages/ProductsPage/ProductsPage';
import NotFoundPage from './Pages/NotFound/NotFoundPage';
import AppLoader from './AppLoader/AppLoader';

import DeviceTypeInformer from './DeviceTypeInformer/DeviceTypeInformer';

import { useDispatch } from 'react-redux';
import { setDeviceAction } from 'redux/actions/postsActions';

import scss from './App.module.scss';

const ProductsPage = lazy(() => import('./Pages/ProductsPage/ProductsPage'));
const OrdersPage = lazy(() => import('./Pages/OrdersPage/OrdersPage'));
const ReturnsPage = lazy(() => import('./Pages/ReturnsPage/ReturnsPage'));
export const App = () => {
  return (
    <div className={scss.app}>
      <Layout>
        <Suspense fallback={<AppLoader isLoading={true} />}>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="home" element={<MainPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="returns" element={<ReturnsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
      <DeviceTypeInformer />
    </div>
  );
};

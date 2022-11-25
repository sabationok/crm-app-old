import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';

import AppLoader from './AppLoader/AppLoader';
import { ToastContainer } from 'react-toastify';

import DeviceTypeInformer from './DeviceTypeInformer/DeviceTypeInformer';

import s from './App.module.scss';

const MainPage = lazy(() => import('./Pages/PageMain/PageMain'));
const NotFoundPage = lazy(() => import('./Pages/PageNotFound/PageNotFound'));
const PageProducts = lazy(() => import('./Pages/PageProducts/PageProducts'));
const PageOrders = lazy(() => import('./Pages/PageOrders/PageOrders'));
const PageReturns = lazy(() => import('./Pages/PageReturns/PageReturns'));
const PageCounterParty = lazy(() => import('./Pages/PageCounterParty/PageCounterParty'));
const PageSettings = lazy(() => import('./Pages/PageSettings/PageSettings'));
const PageStatistics = lazy(() => import('./Pages/PageStatistics/PageStatistics'));
const PageAdmin = lazy(() => import('./Pages/PageAdmin/PageAdmin'));
export const App = () => {
  return (
    <div className={s.app}>
      <Layout>
        <Suspense fallback={<AppLoader isLoading={true} />}>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="main" element={<MainPage />} />
            <Route path="products" element={<PageProducts />} />
            <Route path="orders" element={<PageOrders />} />
            <Route path="returns" element={<PageReturns />} />
            <Route path="statistics" element={<PageStatistics />} />
            <Route path="counterParty" element={<PageCounterParty />} />
            <Route path="settings" element={<PageSettings />} />
            <Route path="admin" element={<PageAdmin />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
      <DeviceTypeInformer />
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

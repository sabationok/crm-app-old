import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import MainPage from './Pages/MainPage/MainPage';
// import ProductsPage from './Pages/ProductsPage/ProductsPage';
import NotFoundPage from './Pages/NotFound/NotFoundPage';
import AppLoader from './AppLoader/AppLoader';

import scss from './App.module.scss';

const ProductsPage = lazy(() => import('./Pages/ProductsPage/ProductsPage'));
const OrdersPage = lazy(() => import('./Pages/OrdersPage/OrdersPage'));
export const App = () => {
  return (
    <div className={scss.app}>
      <Layout>
        <Suspense>
          <Routes>
            <Route index element={<MainPage />} />

            <Route path="main" element={<MainPage />} />
            <Route
              path="products"
              element={
                <Suspense fallback={<AppLoader isLoading={true}/>}>
                  <ProductsPage />
                </Suspense>
              }
            />
            <Route
              path="orders"
              element={
                <Suspense fallback={<AppLoader isLoading={true}/>}>
                  <OrdersPage />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
      {/* <AppLoader isLoading={isLoading}/> */}
    </div>
  );
};

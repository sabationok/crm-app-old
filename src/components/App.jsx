import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
// import MainPage from './Pages/MainPage/MainPage';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import NotFoundPage from './Pages/NotFound/NotFoundPage';

import scss from './App.module.scss';

const MainPage = lazy(() => import('./Pages/MainPage/MainPage'));
export const App = () => {
  return (
    <div className={scss.app}>
      <Layout>
        <Suspense>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path='main' element={<MainPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};

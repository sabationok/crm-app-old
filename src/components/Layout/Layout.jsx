import React from 'react';
import PropTypes from 'prop-types';
import ProductsPage from 'components/Pages/ProductsPage';

import css from './Layout.module.css';
const Layout = props => {
  return (
    <>
      <header className={css.header}>
        <a className={css.logoLink} href="./">
          <span className={css.logoText}>LO</span>
          <span className={css.logoText}>GO</span>
        </a>
        <div className={css.menu}>
          <button className={css.button} type="button">
            MENU
          </button>
          <ul className={css.navList}>
            <li>
              <a
                className={css.navLink}
                href="./crm_react"
                rel="noopener noreferrer"
              >
                Головна
              </a>
            </li>
          </ul>
        </div>
      </header>
      <ProductsPage />
    </>
  );
};

Layout.propTypes = {};

export default Layout;

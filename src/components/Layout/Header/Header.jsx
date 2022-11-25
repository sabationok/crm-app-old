import React from 'react';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import { NavLink } from 'react-router-dom';

import s from './Header.module.scss';
const Header = () => {
  // const pageLinks = [
  //   { title: 'Головна', path: 'main' },
  //   { title: 'Товари', path: 'products' },
  //   { title: 'Замовлення', path: 'orders' },
  //   { title: 'Повернення', path: 'returns' },
  //   { title: 'Налаштування', path: 'settings' },
  //   { title: 'Контрагенти', path: 'counterParty' },
  //   { title: 'Статистика', path: 'statistics' },
  //   { title: '', path: '' },
  //   { title: '', path: '' },
  //   { title: 'Вихід', path: '#' },
  // ];

  return (
    <header className={s.header}>
      <div className={s.menuBox}>
        <div className={s.logoLink}>
          <span className={s.logoText}>LOGO</span>
        </div>
        <ul className={s.navList}>
          <li>
            <NavLink className={s.navLink} to="main">
              Головна
            </NavLink>
          </li>
          <li>
            <NavLink className={s.navLink} to="products">
              Товари
            </NavLink>
          </li>
          <li>
            <NavLink className={s.navLink} to="orders">
              Замовлення
            </NavLink>
          </li>
          <li>
            <NavLink className={s.navLink} to="returns">
              Повернення
            </NavLink>
          </li>
          <li>
            <NavLink className={s.navLink} to="#">
              Вихід
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={s.menuBox}>
        <SvgIcon iconId={'icon-person'} size={'32px'} />
        <ul className={s.profileInfoList}>
          <li>
            <button className={s.navLink}>Вихід</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import NavMenu from '../NavMenu/NavMenu';
import { Link } from 'react-router-dom';

import s from './Header.module.scss';
const Header = () => {
  const pageLinks = [
    { title: 'Головна', path: 'main', iconId: 'assignment-ok' },
    { title: 'Товари', path: 'products', iconId: 'storage' },
    { title: 'Замовлення', path: 'orders', iconId: 'list' },
    { title: 'Повернення', path: 'returns', iconId: 'return' },
    { title: 'Статистика', path: 'statistics', iconId: 'statistics' },
    { title: 'Контрагенти', path: 'counterParty', iconId: 'persons' },
    { title: 'Налаштування', path: 'settings', iconId: 'settings' },
    { title: 'Адмін панель', path: 'admin', iconId: 'admin' },
    { title: 'Вихід', path: 'logOut', iconId: 'logout' },
  ];

  return (
    <header className={s.header}>
      <NavMenu pageLinks={pageLinks} />

      <Link to="/" className={s.logoLink}>
        <span className={s.logoText}>LOGO</span>
      </Link>

      <div></div>

      <SvgIcon iconId="chat" size={'32px'} />

      <div className={s.menuBox}>
        <SvgIcon iconId="person" size={'32px'} />
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

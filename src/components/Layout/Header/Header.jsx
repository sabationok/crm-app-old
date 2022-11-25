import React from 'react';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import { NavLink } from 'react-router-dom';

import s from './Header.module.scss';
const Header = () => {
  const pageLinks = [
    { title: 'Головна', path: 'main', iconId: '' },
    { title: 'Товари', path: 'products', iconId: 'storage' },
    { title: 'Замовлення', path: 'orders', iconId: 'list' },
    { title: 'Повернення', path: 'returns', iconId: 'return' },
    { title: 'Статистика', path: 'statistics', iconId: 'stat' },
    { title: 'Контрагенти', path: 'counterParty', iconId: 'persons' },
    { title: 'Налаштування', path: 'settings', iconId: 'settings' },
    { title: 'Адмін панель', path: 'admin', iconId: 'admin' },
    { title: 'Вихід', path: 'logOut', iconId: 'logout' },
  ];

  return (
    <header className={s.header}>
      <div className={s.menuBox}>
        <div className={s.logoLink}>
          <span className={s.logoText}>LOGO</span>
        </div>
        <ul className={s.navList}>
          {pageLinks.map(item => (
            <li key={item.path}>
              <NavLink to={item.path} className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}>
                {item.iconId && <SvgIcon iconId={item.iconId} size="24px" />}
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
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

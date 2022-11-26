import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { NavLink } from 'react-router-dom';

import s from './NavMenu.module.scss';

const NavMenu = ({ pageLinks = [], onClick }) => {
  return (
    <div className={s.menuBox}>
      <div className={s.hover}>
        <SvgIcon iconId="actions-v" size="32px" />
      </div>
      <ul className={s.navList}>
        {pageLinks.map(item => (
          <li key={item.path} onClick={onClick && onClick}>
            <NavLink to={item.path} className={({ isActive }) => (isActive ? s.navLinkActive : s.navLink)}>
              {item.iconId && <SvgIcon iconId={item.iconId} size="18px" />}
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;

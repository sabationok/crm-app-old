import React from 'react';
import { Link } from 'react-router-dom';

import s from './ButtonLink.module.scss';
const ButtonLink = ({
  children,
  to = '/',
  styles = {},
  size = '',
  className = '',
  text = '',
  onClick,
  styleType = 'PrimaryBtn',
}) => {
  const classNames = [s.Button, s[styleType], className].join(' ');
  let style = {
    width: size,
    height: size,
    ...styles,
  };
  return (
    <Link to={to} onClick={onClick} style={style} className={classNames}>
      <span>{text}</span>
      {children}
    </Link>
  );
};

export default ButtonLink;

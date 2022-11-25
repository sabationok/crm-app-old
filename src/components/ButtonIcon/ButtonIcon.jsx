import React from 'react';
import sprite from 'img/sprite';
import s from './ButtonIcon.module.scss';

const ButtonIcon = ({
  children,
  type = 'button',
  disabled = false,
  onClick = null,
  iconId = '',
  styles = {},
  size = '',
  className = '',
  styleType = 'PrimaryBtn',
}) => {
  const classNames = [s.Button, s[styleType], className].join(' ');
  function handleBtnClick() {
    if (onClick) {
      onClick();
      return;
    }
    return;
  }
  let style = {
    width: size,
    height: size,
    ...styles,
  };
  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled}
      style={style}
      title={iconId}
      onClick={handleBtnClick}
    >
      <svg className={s.iconSvg}>
        <use href={`${sprite}#icon-${iconId.toLowerCase()}`}></use>
      </svg>
      {children}
    </button>
  );
};

export default ButtonIcon;

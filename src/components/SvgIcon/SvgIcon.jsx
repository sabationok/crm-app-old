import React from 'react';
import sprite from 'img/sprite';
import s from './SvgIcon.module.scss';
const SvgIcon = ({ iconId='info', style, size = '', svgClass = '' }) => {
  const styles = {
    ...style,
    width: size,
    height: size,
  };
  const svgClassArr = [s.svg, svgClass].join(' ');
  return (
    <div className={s.iconBox} style={styles}>
      <svg className={svgClassArr}>
        <use href={`${sprite}#icon-${iconId}`}></use>
      </svg>
    </div>
  );
};

export default SvgIcon;

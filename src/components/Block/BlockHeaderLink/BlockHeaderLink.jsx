import React from 'react';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import BlockActions from '../BlockActions/BlockActions';

import s from './BlockHeaderLink.module.scss';

const BlockHeaderLink = ({ title = 'Title', subTitle = 'link', iconId = 'info' }) => {
  return (
    <div className={s.header}>
      <SvgIcon iconId={iconId} size={'24px'} />

      <span className={s.title}>
        <span className={s.titleInner} title={title}>
          {title}
        </span>
      </span>
      <span className={s.headerLink}>
        <span className={s.subTitle} title={subTitle}>
          {subTitle}
        </span>
      </span>

      <BlockActions />
    </div>
  );
};

export default BlockHeaderLink;

import React from 'react';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './BlockHeaderLink.module.scss';

const BlockHeaderLink = ({ title = 'Title', subTitle = 'link', iconId = 'info' }) => {
  return (
    <div className={s.header}>
      <SvgIcon iconId={iconId} size={'24px'} />

      <span className={s.title}>
        <span className={s.titleInner} title={title}>{title}</span>
      </span>
      <span className={s.headerLink}>
        <span className={s.subTitle} title={subTitle}>
          {subTitle}
        </span>
      </span>

      <ButtonLink to="#">
        <SvgIcon iconId={'link'} size="18px" />
      </ButtonLink>
      <ButtonIcon iconId={'copy'} size="100%" />
    </div>
  );
};

export default BlockHeaderLink;

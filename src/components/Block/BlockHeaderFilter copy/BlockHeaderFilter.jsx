import React from 'react';

import BlockFilter from '../BlockHeaderFilter/BlockFounder/BlockFounder';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './BlockHeaderFilter.module.scss';

const BlockHeaderFilter = ({
  title,
  subTitle,
  blockFilter,
  blockFilterParams,
}) => {
  return (
    <div className={s.header}>
      <SvgIcon iconId={`icon-${title}`} size={'24px'} />

      {blockFilter && <BlockFilter blockFilterParams={blockFilterParams} />}
      {title && <span className={s.title}>{title}</span>}
      {subTitle && (
        <span className={s.subTitle} title={subTitle}>
          {subTitle}
        </span>
      )}
    </div>
  );
};

export default BlockHeaderFilter;

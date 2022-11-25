import React, { useState } from 'react';

import BlockFilter from './BlockFounder/BlockFounder';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './BlockHeaderFilter.module.scss';

const BlockHeaderFilter = ({
  title,
  iconId = 'info',
  subTitle,
  blockFilter,
  blockFilterParams,
}) => {
  const [filterActive, setFilterActive] = useState(false);
  function hadleToggleFilter() {
    setFilterActive(!filterActive);
  }

  return (
    <div className={s.header}>
      <SvgIcon iconId={iconId} size={'24px'} />

      <BlockFilter blockFilterParams={blockFilterParams} />

      <ButtonIcon
        iconId={filterActive ? 'filter-on' : 'filter-off'}
        size="30px"
        onClick={hadleToggleFilter}
      />
      {title && <span className={s.title}>{title}</span>}
    </div>
  );
};

export default BlockHeaderFilter;

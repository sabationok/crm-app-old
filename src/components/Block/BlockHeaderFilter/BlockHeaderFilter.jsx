import React, { useState } from 'react';

import BlockFounder from './BlockFounder/BlockFounder';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import BlockActions from '../BlockActions/BlockActions';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './BlockHeaderFilter.module.scss';

const BlockHeaderFilter = ({ title, iconId = 'info', subTitle, blockFilter, blockFilterParams }) => {
  const [filterActive, setFilterActive] = useState(false);
  function hadleToggleFilter() {
    setFilterActive(!filterActive);
  }

  return (
    <div className={s.header}>
      <SvgIcon iconId={iconId} size={'24px'} />

      <BlockFounder blockFilterParams={blockFilterParams} />

      <ButtonIcon iconId={filterActive ? 'filter-on' : 'filter-off'} size="30px" onClick={hadleToggleFilter} />
      {title && (
        <span className={s.title}>
          <span>{title}</span>
        </span>
      )}
      <BlockActions />
    </div>
  );
};

export default BlockHeaderFilter;

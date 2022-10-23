import React from 'react';
// import PropTypes from 'prop-types';
// import BlockPortal from './BlockPportal';
import { usePage } from 'components/contexts/PageContext';

import scss from './Block.module.scss';

const Block = ({ id }) => {
  let { selectedItemId } = usePage();
  return (
    <div className={scss.block}>
      <div className={scss.header}>{selectedItemId}</div>
      <div className={scss.content}>
        <div className={scss.overflow} id={id}>
          {selectedItemId}
        </div>
      </div>
      <div className={scss.footer}></div>
    </div>
  );
};

Block.propTypes = {};

export default Block;

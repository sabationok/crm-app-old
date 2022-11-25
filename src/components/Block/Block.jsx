import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import BlockPortal from './BlockPortal';
import BlockContext from './BlockContext';
import BlockHeaderFilter from './BlockHeaderFilter/BlockHeaderFilter';
import BlockHeaderLink from './BlockHeaderLink/BlockHeaderLink';
import s from './Block.module.scss';

const Block = ({
  children,
  title = 'Block',
  iconId='info',
  subTitle = null,
  footer = true,
  header = true,
  style = {},
  className = '',
  iconStartId = null,
  inWork = false,

  blockFilter = false,
  blockFilterParams,
  id,
}) => {
  useEffect(() => {
    console.log(`small block '${title}'render`);
  }, [title]);
  const blockClassName = [s.block, className].join(' ');
  console.log('small block initialize');
  return (
    <>
      <BlockContext>
        <div className={blockClassName} style={style} id={id}>
          {header && blockFilter && (
            <BlockHeaderFilter
              blockFilter={blockFilter}
              blockFilterParams={blockFilterParams}
              title={title}
              iconId={iconId}
            />
          )}
          {header && !blockFilter && (
            <BlockHeaderLink title={title} iconId={iconId} />
          )}
          <div className={s.content}>
            <div className={s.overflow}>
              {children}

              {inWork && <span className={s.inWork}>In work ...</span>}
            </div>
          </div>
          {footer && <div className={s.footer}></div>}
        </div>
        {/* <BlockPortal >
        </BlockPortal> */}
      </BlockContext>
      {/* <div className={s.block}>
        <div className={s.header}>{selectedItemId}</div>
        <div className={s.content}>
          <div className={s.overflow} id={id}></div>
        </div>
        <div className={s.footer}></div>
      </div> */}
    </>
  );
};

Block.propTypes = {};

export default Block;

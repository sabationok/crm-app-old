import PropTypes from 'prop-types';
import Block from 'components/Block/Block';
import { PageProvider } from 'contexts/PageContext';

import s from './PageReturns.module.scss';

const PageReturns = () => {
  return (
    <PageProvider>
      <div className={s.pageFlex}>
        <section className={s.sectionTopFlex}>
          <Block blockFilter title="Returns list" iconId="list" />
        </section>

        <section className={s.sectionBottomFlex}>
          <div className={s.sectionInnerLeft}>
            <Block title="Return info" iconId="info" />
          </div>
          <div className={s.sectionInnerRight}>
            <Block title="Inspect" iconId="inspect" />
          </div>
        </section>
      </div>
    </PageProvider>
  );
};

PageReturns.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PageReturns;

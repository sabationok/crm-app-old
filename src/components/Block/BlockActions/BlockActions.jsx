import React from 'react'
import SvgIcon from 'components/SvgIcon/SvgIcon'
import ButtonIcon from 'components/ButtonIcon/ButtonIcon'
import ButtonLink from 'components/ButtonLink/ButtonLink'

import s from './BlockActions.module.scss'
const BlockActions = () => {
  return (
    <div className={s.actionsContainer}>
    <ButtonIcon iconId="actions-h" size="100%" />
    <div className={s.actionsList}>
      <ButtonLink to="#" size="100%" className={s.hover}>
        <SvgIcon iconId="link" size="100%" />
      </ButtonLink>
      <ButtonIcon iconId="copy" size="100%" className={s.hover} />
      <ButtonIcon iconId="share" size="100%" className={s.hover} />
      <ButtonIcon iconId="refresh" size="100%" className={s.hover} />
    </div>
  </div>
  )
}

export default BlockActions
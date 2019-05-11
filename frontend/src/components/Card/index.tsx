import React from 'react'
import cssClasses from './index.module.css'
import classNames from 'classnames';
import { ReactComponent as RightArrow } from './RightArrow.svg'

export const Card: React.FC<{
  marginBottom?: boolean,
  onClick?(e: React.MouseEvent): void
}> = (props) =>
  <div className={classNames(
    cssClasses['card'],
    props.marginBottom && cssClasses['card--margin-bottom'],
    props.onClick && cssClasses['card--clickable'],
  )} onClick={props.onClick}>
    { props.children }
    { props.onClick && <RightArrow className={cssClasses['card__arrow']} /> }
  </div>

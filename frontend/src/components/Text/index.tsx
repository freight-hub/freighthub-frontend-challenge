import React from 'react'

import cssClasses from './index.module.css'
import classNames from 'classnames';

export const Text: React.FC<{
  big?: boolean,
  small?: boolean,
  bold?: boolean,
  secondary?: boolean,
  inline?: boolean,
  primary?: boolean,
  uppercase?: boolean,
  marginRight?: boolean,
  marginLeft?: boolean,
  onClick?(e: React.MouseEvent): void,
}> = (props) =>
  <div 
    className={classNames(
      cssClasses['text'],
      props.big && cssClasses['text--big'],
      props.small && cssClasses['text--small'],
      props.bold && cssClasses['text--bold'],
      props.secondary && cssClasses['text--secondary'],
      props.inline && cssClasses['text--inline'],
      props.primary && cssClasses['text--primary'],
      props.uppercase && cssClasses['text--uppercase'],
      props.marginRight && cssClasses['text--margin-right'],
      props.marginLeft && cssClasses['text--margin-left']
    )}
    onClick={props.onClick}
  >
    { props.children }
  </div>

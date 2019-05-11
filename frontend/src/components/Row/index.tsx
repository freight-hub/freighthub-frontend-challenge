import React from 'react'

import classNames from 'classnames';
import cssClasses from './index.module.css';

export const Row: React.FC<{
  borderTop?: boolean,
  small?: boolean,
  marginTop?: boolean,
  marginBottom?: boolean,
}> = (props) =>
  <div className={classNames(
    cssClasses['row'],
    props.borderTop && cssClasses['row--border-top'],
    props.small && cssClasses['row--small'],
    props.marginTop && cssClasses['row--margin-top'],
    props.marginBottom && cssClasses['row--margin-bottom']
  )}>
    {props.children}
  </div>

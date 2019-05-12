import React from 'react'
import { ReactComponent as LeftArrow } from './left-arrow.svg'
import classNames from 'classnames';
import cssClasses from './index.module.css'
import { Text } from '@freighthub/components/Text';

export const Header: React.FC<{
  title?: string;
  onClickBack?(e: React.MouseEvent): void;
}> = (props) =>
  <div className={classNames(
    cssClasses['header'],
    props.onClickBack && cssClasses['header--with-left-action']
  )}>
    {
      props.onClickBack && <LeftArrow 
        className={classNames(
          cssClasses['header-action'],
          cssClasses['header-action--left']
        )}
        onClick={props.onClickBack}
      />
    }
    { props.title && <Text>{props.title}</Text>}
  </div>

import React from 'react'
import classNames from 'classnames'
import cssClasses from './index.module.css'

export const Button: React.FC<{
  primary?: boolean,
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  onClick(e: React.MouseEvent): void;
}> = ({
  icon: Icon,
  ...props
}) => 
<button
  className={classNames(
    cssClasses['button'],
    props.primary && cssClasses['button--primary'],
    Icon && cssClasses['button--with-icon']
  )}
  onClick={props.onClick}>
  { Icon && <Icon className={cssClasses['button__icon']} /> }
  {props.children}
</button>

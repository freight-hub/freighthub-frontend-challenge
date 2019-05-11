import React from 'react'
import classNames from 'classnames'
import cssClasses from './index.module.css'

export const Input: React.FC<{
  value?: string,
  type?: 'text' | 'password',
  marginBottom?: boolean,
  marginRight?: boolean,
  placeholder?: string,
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}> = (props) => 
  <input
    type={props.type || 'text'}
    value={props.value}
    placeholder={props.placeholder}
    className={classNames(
      cssClasses['input'],
      props.marginBottom && cssClasses['input--margin-bottom'],
      props.marginRight && cssClasses['input--margin-right']
    )}
    onChange={props.onChange}
  />

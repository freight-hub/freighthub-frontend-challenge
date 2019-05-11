import React from 'react';
import cssClasses from './index.module.css';

export const List: React.FC<{}> = 
(props) =>
  <div className={cssClasses.list}>
    { props.children }
  </div>

import React from 'react'
import { ListContainer } from "modules/list/components/container";
import { DetailContainer } from "modules/detail/components/container";

export const App: React.FC<{
  view: 'list' | 'detail'
}> = ({ view }) =>

  view === 'list' ?
  <ListContainer /> :

  view === 'detail' ?
  <DetailContainer /> :

  null

import React from 'react'
import { ListContainer } from "../../list/components/List.container";
import { DetailContainer } from "../../detail/components/Detail.container";

export const App: React.FC<{
  view: 'list' | 'detail'
}> = ({ view }) =>

  view === 'list' ?
  <ListContainer /> :

  view === 'detail' ?
  <DetailContainer /> :

  null

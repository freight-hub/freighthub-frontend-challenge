import React from 'react';
import { connect } from "unistore/react";
import { compose, lifecycle } from 'recompose';
import { getShipments } from '../actions/get-shipments';
import { openShipment } from '../actions/open-shipment';
import { ListState } from '../state';
import { ShipmentInterface } from '../shipment.interface';
import { setCurrentPage } from '../actions/set-current-page';
import { getFilteredAndSortedShipments } from '../selectors/get-filtered-and-sorted-shipments';
import { List } from './List';
import { getSortFunction } from '../utils/get-sort-function';
import { onChangeSearch } from '../actions/on-change-search';

const mapStateToProps = (state: ListState) => {
  const List = state.List || ListState.List;

  const shipments = List.shipments && getFilteredAndSortedShipments(
    state,
    (shipment) => List.filter.id ? shipment.id.toLocaleLowerCase().includes(List.filter.id.toLocaleLowerCase()) : true,
    getSortFunction(List.sort),
  );

  return {
    ...List,
    shipments: shipments.slice(List.pagination.pageNumber * List.pagination.itemsCount, List.pagination.pageNumber * List.pagination.itemsCount + List.pagination.itemsCount),
    pagination: {
      ...List.pagination,
      pagesCount: shipments.length / List.pagination.itemsCount
    }
  }
}

const mapActions = {
  openShipment,
  getShipments,
  onChangePage: (state: ListState, currentPage: number) => setCurrentPage(currentPage)(state),
  onChangeSearch: compose(
    setCurrentPage(0),
    onChangeSearch,
  ),
}

export const ListContainer = compose<{
  shipments?: ShipmentInterface[],
  pagination: {
    pageNumber: number,
    offset: number,
    itemsCount: number,
    pagesCount: number
  },
  onChangePage: (selectedPage: number) => void
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  openShipment: (shipment: ShipmentInterface) => void
}, {}>(
  connect(mapStateToProps, mapActions),
  lifecycle<{
    isLoaded?: boolean,
    getShipments(): void
  }, {}>({
    componentDidMount(){
      !this.props.isLoaded && this.props.getShipments();
    },
  })
)(List);

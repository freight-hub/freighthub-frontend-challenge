import React from 'react'
import ReactPaginate from 'react-paginate';
import cssClasses from './index.module.css';

export const Pagination: React.FC<{
  pageCount: number,
  currentPage: number,
  onChangePage(selectedPage: number): void,
}> = (props) => <ReactPaginate 
  {...props}
  containerClassName={cssClasses['pagination']}
  pageClassName={cssClasses['pagination__item']}
  previousClassName={cssClasses['pagination__item']}
  nextClassName={cssClasses['pagination__item']}
  activeClassName={cssClasses['pagination__item--active']}
  forcePage={props.currentPage}
  marginPagesDisplayed={2}
  pageRangeDisplayed={5}
  onPageChange={(item) => props.onChangePage(item.selected)}
/>

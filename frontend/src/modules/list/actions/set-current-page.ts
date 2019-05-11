import { ListState } from "../state";

export const setCurrentPage = (pageNumber: number) => (state: ListState): ListState => {
  const List = state.List || ListState.List;

  return {
    ...state,
    List: {
      ...List,
      pagination: {
        ...List.pagination,
        pageNumber,
      }
    }
  };
}

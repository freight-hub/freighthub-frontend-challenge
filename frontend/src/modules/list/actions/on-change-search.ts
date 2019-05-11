import { ListState } from "../state";

export const onChangeSearch = (state: ListState, e: React.ChangeEvent<HTMLInputElement>) => {
  const List = state.List || ListState.List;

  return {
    ...state,
    List: {
      ...List,
      filter: {
        id: e.target.value
      }
    }
  }
}

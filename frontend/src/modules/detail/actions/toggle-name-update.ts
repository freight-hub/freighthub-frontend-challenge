import { DetailState } from "../state";

export const toggleNameUpdate = (isNameUpdateVisible: boolean) => (state: DetailState): DetailState => ({
  ...state,
  Detail: {
    ...state.Detail,
    isNameUpdateVisible,
  }
})

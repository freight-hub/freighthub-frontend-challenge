import { AppState } from "modules/app/state";

export const onClickBack = (state: AppState): AppState => ({
  ...state,
  view: 'list'
})

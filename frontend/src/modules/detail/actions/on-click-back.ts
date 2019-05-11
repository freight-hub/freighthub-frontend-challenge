import { defaultState } from "../../app/store";

export const onClickBack = (state: defaultState): defaultState => ({
  ...state,
  view: 'list'
})

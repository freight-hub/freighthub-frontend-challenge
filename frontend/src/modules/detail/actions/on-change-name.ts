import { ListState } from "../../list/state";
import { DetailState } from "../state";

export const onChangeName = (state: DetailState & ListState, e: React.ChangeEvent<HTMLInputElement>): DetailState => {
  const name = e.currentTarget.value || ''

  return {
    ...state,
    Detail: {
      ...state.Detail,
      shipment: {
        ...state.Detail.shipment,
        name,
      }
    }
  }
}

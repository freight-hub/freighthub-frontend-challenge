import { DetailState } from "../state";
import { ListState } from "modules/list/state";

export const resetName = (state: ListState & DetailState): DetailState => ({
  ...state,
  Detail: {
    ...state.Detail,
    shipment: {
      ...state.Detail.shipment,
      name: state.List.shipments.filter(
        shipment => shipment.id === state.Detail.shipment.id
      )[0].name
    }
  }
})

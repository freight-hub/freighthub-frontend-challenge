import { DetailState } from "../state";
import { ListState } from "modules/list/state";

export const saveName = (state: ListState & DetailState): ListState => ({
  ...state,
  List: {
    ...state.List,
    shipments: state.List.shipments.map(
      shipment => shipment.id !== state.Detail.shipment.id ? shipment : {
        ...shipment,
        name: state.Detail.shipment.name,
      }
    )
  }
})

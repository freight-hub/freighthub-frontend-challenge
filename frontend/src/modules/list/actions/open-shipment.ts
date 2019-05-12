import { AppState } from "modules/app/state";
import { DetailState } from "modules/detail/state";
import { ShipmentInterface } from "../shipment.interface";

export const openShipment = (state: AppState, shipment: ShipmentInterface): AppState & DetailState => ({
  ...state,
  view: 'detail',
  Detail: {
    isNameUpdateVisible: false,
    shipment,
  }
})

import { defaultState } from "../../app/store";
import { DetailState } from "../../detail/state";
import { ShipmentInterface } from "../shipment.interface";

export const openShipment = (state: defaultState, shipment: ShipmentInterface): defaultState & DetailState => ({
  ...state,
  view: 'detail',
  Detail: {
    isNameUpdateVisible: false,
    shipment,
  }
})

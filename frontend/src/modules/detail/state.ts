import { ShipmentInterface } from "../list/shipment.interface";

export const DetailState = {
  Detail: {
    isNameUpdateVisible: false,
    shipment: {}
  }
}

export type DetailState = {
  Detail: {
    isNameUpdateVisible: boolean,
    shipment: ShipmentInterface
  }
}

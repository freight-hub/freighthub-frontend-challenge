import { ShipmentInterface } from "../shipment.interface";
import { ListState } from "../state";

export const getFilteredAndSortedShipments = (
  state: ListState,
  filterFunction: (shipment: ShipmentInterface, index: number) => boolean,
  sortFunction: (shipmentA: ShipmentInterface, shipmentB: ShipmentInterface) => 0 | 1 | -1,
): ShipmentInterface[] => {
  const List = state.List || ListState.List;
  return List.shipments
    .filter(filterFunction)
    .sort(sortFunction)
}

import { ShipmentInterface } from "../shipment.interface";

const SortFunctions: Record<string, (shipmentA: ShipmentInterface, shipmentB: ShipmentInterface) => 0 | 1 | -1> = {
  name: (shipmentA, shipmentB) => shipmentA.name < shipmentB.name ? -1 : 1,
  id: (shipmentA, shipmentB) => shipmentA.id < shipmentB.id ? -1 : 1,
  active: (shipmentA) => shipmentA.status === 'ACTIVE' ? -1 : 1,
  completed: (shipmentA) => shipmentA.status === 'COMPLETED' ? -1 : 1,
  none: () => 0
}

export const getSortFunction = (sortBy: string) => (SortFunctions[sortBy])

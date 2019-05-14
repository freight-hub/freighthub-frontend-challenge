import { ShipmentInterface } from "../shipment.interface";

/**
 * Set of sort functions records
 */
const SortFunctions: Record<string, (shipmentA: ShipmentInterface, shipmentB: ShipmentInterface) => 0 | 1 | -1> = {
  
  /**
   * Sort by name
   */
  name: (shipmentA, shipmentB) => shipmentA.name < shipmentB.name ? -1 : 1,

  /**
   * Sort by id
   */
  id: (shipmentA, shipmentB) => shipmentA.id < shipmentB.id ? -1 : 1,
  
  /**
   * Sort by active status
   */
  active: (shipmentA) => shipmentA.status === 'ACTIVE' ? -1 : 1,
  
  /**
   * Sort by completed status
   */
  completed: (shipmentA) => shipmentA.status === 'COMPLETED' ? -1 : 1,
  
  /**
   * Default sort
   */
  none: () => 0
}

/**
 * Get sort function by it's name
 */
export const getSortFunction = (sortBy: string) => (SortFunctions[sortBy])

export interface ShipmentInterface {
  /**
   * ID
   */
  id: string,

  /**
   * Name
   */
  name: string;

  /**
   * List of cargo
   */
  cargo: Array<{
    type: string;
    description: string;
    volume: string;
  }>;

  /**
   * Shipping mode
   */
  mode: string,

  /**
   * Shipping type
   */
  type: string,

  /**
   * Destination location
   */
  destination: string;

  /**
   * Origin location
   */
  origin: string;

  /**
   * Additional services
   */
  services: Array<{
    type: string;
    value?: string;
  }>

  /**
   * Total price
   */
  total: string;

  /**
   * Status
   */
  status: string;

  /**
   * User ID
   */
  userId: string;
}

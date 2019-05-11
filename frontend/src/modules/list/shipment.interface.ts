export interface ShipmentInterface {
  id: string,
  name: string;
  cargo: Array<{
    type: string;
    description: string;
    volume: string;
  }>;
  mode: string,
  type: string,
  destination: string;
  origin: string;
  services: Array<{
    type: string;
    value?: string;
  }>
  total: string;
  status: string;
  userId: string;
}

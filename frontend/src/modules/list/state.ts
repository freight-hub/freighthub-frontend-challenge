import { ShipmentInterface } from "./shipment.interface";

export const ListState = {
  List: {
    isLoaded: false,
    shipments: [],
    filter: {
      id: '',
    },
    sort: 'none',
    pagination: {
      pageNumber: 0,
      offset: 0,
      itemsCount: 20,
      pagesCount: 0
    }
  },
}

export type ListState = {
  List: {
    isLoaded: boolean;
    shipments: ShipmentInterface[],
    filter: {
      id: string,
    },
    sort: 'name' | 'id' | 'none'
    pagination: {
      pageNumber: number,
      offset: number,
      itemsCount: number,
      pagesCount: number
    }
  },
}

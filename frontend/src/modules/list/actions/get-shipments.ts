import axios from 'axios';
import { ListState } from '../state';

export const getShipmentsAction = (httpService: typeof axios) => (state: ListState): Promise<ListState> => {
  const List = state.List || ListState.List;
  
  return httpService.get('http://localhost:8000/shipments').then(
    response => ({
      ...state,
      List: {
        ...List,
        isLoaded: true,
        shipments: response.data,
      }
    })
  )
}

export const getShipments = getShipmentsAction(axios)

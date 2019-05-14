import axios from 'axios';
import { ListState } from '../state';

export const getShipmentsAction = (httpService: typeof axios) => (state: ListState): Promise<ListState> => {
  const List = state.List || ListState.List;
  
  return httpService.get(process.env.REACT_APP_API_ENDPOINT).then(
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

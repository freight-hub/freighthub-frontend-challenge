import { getShipmentsAction } from "./get-shipments";

describe('getShipmentsAction', () => {
  it('should call api and update shipments state', (done) => {
    const httpService = {
      get: () => (Promise.resolve({
        data: 'dummy data'
      }))
    }

    const getSpy = jest.spyOn(httpService, 'get');

    getShipmentsAction(httpService as any)({
      List: {}
    } as any).then(
      (response) => {
        expect(response).toEqual({
          List: {
            isLoaded: true,
            shipments: 'dummy data'
          }
        });
        done();
      }
    ).catch(
      () => {
        fail('should not catch')
      }
    )

    expect(getSpy).toBeCalledWith('http://localhost:8000/shipments');
    expect(getSpy).toBeCalledTimes(1);
    
  })

  it('should populate List state with default state', () => {
    const httpService = {
      get: () => (Promise.resolve({
        data: 'dummy data'
      }))
    }

    expect.assertions(1);
    return expect(getShipmentsAction(httpService as any)({} as any)).resolves.toEqual({
      List: {
        filter: {
          id: ''
        },
        sort: 'none',
        isLoaded: true,
        shipments: 'dummy data',
        pagination: {
          pageNumber: 0,
          offset: 0,
          itemsCount: 20,
          pagesCount: 0
        }
      }
    })
    
  })
})
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios';
import getWeather from '../../../../../src/bundle/weather/middleware/actions'
import * as types from '../../../../../src/bundle/weather/middleware/constants'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async weather actions', () => {

    const weather = {

        list: [
            {
                dt: 1585396800,
                temp: {
                    day: 6.65,
                    min: 1.27,
                    max: 6.65,
                    night: 1.27,
                    eve: 4.46,
                    morn: 6.65
                },
                pressure: 1038,
                humidity: 67,
                weather: [
                    {
                        id: 500, 
                        main: "Rain", 
                    }
                ],
            },
            {
                dt: 1585396800,
                temp: {
                    day: 6.65,
                    min: 1.27,
                    max: 6.65,
                    night: 1.27,
                    eve: 4.46,
                    morn: 6.65
                },
                pressure: 1038,
                humidity: 67,
                weather: [
                    {
                        id: 500, 
                        main: "Rain", 
                    }
                ],
            },
            {
                dt: 1585396800,
                temp: {
                    day: 6.65,
                    min: 1.27,
                    max: 6.65,
                    night: 1.27,
                    eve: 4.46,
                    morn: 6.65
                },
                pressure: 1038,
                humidity: 67,
                weather: [
                    {
                        id: 500, 
                        main: "Rain", 
                    }
                ],
            },
            {
                dt: 1585396800,
                temp: {
                    day: 6.65,
                    min: 1.27,
                    max: 6.65,
                    night: 1.27,
                    eve: 4.46,
                    morn: 6.65
                },
                pressure: 1038,
                humidity: 67,
                weather: [
                    {
                        id: 500, 
                        main: "Rain", 
                    }
                ],
            },
            {
                dt: 1585396800,
                temp: {
                    day: 6.65,
                    min: 1.27,
                    max: 6.65,
                    night: 1.27,
                    eve: 4.46,
                    morn: 6.65
                },
                pressure: 1038,
                humidity: 67,
                weather: [
                    {
                        id: 500, 
                        main: "Rain", 
                    }
                ],
            },
        ]
    };

    beforeEach(() => {
        moxios.install();
    })

    afterEach(function () {
        moxios.uninstall();
    });
    it('creates RECEIVE_WEATHER when fetching weather has been done', async () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: weather ,
            });
        });
        const expectedActions = [
            { type: types.REQUEST_WEATHER },
            { type: types.RECEIVE_WEATHER, weather: weather }
        ]
        const store = mockStore({
            weather: {}
        })

        return store.dispatch(getWeather()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
    it('creates RECEIVE_FAILURE when fetching weather has been done', async () => {
        const errorResp = 'invalid data';

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.reject(errorResp);
        });

        const expectedActions = [
            { type: types.REQUEST_WEATHER },
            { type: types.RECEIVE_FAILURE, error: errorResp }
        ]
        const store = mockStore({
            error: 'Error Occurred',
        })

        return store.dispatch(getWeather()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
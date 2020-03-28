import * as types from '../../../../../src/bundle/weather/middleware/constants'
import weatherReducer from '../../../../../src/bundle/weather/middleware/reducer'

describe('async weather reducer', () => {
    const initialState = {
        isLoading: false,
        error: '',
        weather: {}
    };

    const weather = {
        city:
        {
            id: 3333229,
            name: "Edinburgh",
            coord: {
                lon: -3.1933,
                lat: 55.9497
            },
            country: "GB",
            population: 0,
            timezone: 0
        },
        cod: "200",
        message: 0.0841222,
        cnt: 14,
        list: [
            {
                dt: 1585396800,
                sunrise: 1585374769,
                sunset: 1585420943,
                temp: {
                    day: 6.65,
                    min: 1.27,
                    max: 6.65,
                    night: 1.27,
                    eve: 4.46,
                    morn: 6.65
                },
                feels_like: {
                    day: 0.34,
                    night: -4.97,
                    eve: -2.43,
                    morn: 0.34
                },
                pressure: 1038,
                humidity: 67,
                weather: [
                    {
                        id: 500, 
                        main: "Rain", 
                        description: "light rain", 
                        icon: "10d"
                    }
                ],
                speed: 6.38,
                deg: 30,
                clouds: 52,
                rain: 0.29
            },
            {
                dt: 1585483200,
                sunrise: 1585461011,
                sunset: 1585507464,
                temp: {
                    day: 4.34,
                    min: 0.48,
                    max: 6.06,
                    night: 2.9,
                    eve: 5.33,
                    morn: 0.48
                },
                feels_like: {
                    day: 0.03,
                    night: -1.83,
                    eve: 3.04,
                    morn: -4.52
                },
                pressure: 1047,
                humidity: 64,
                weather: [
                    {
                        id: 804,
                        main: "Clouds",
                        description: "overcast clouds",
                        icon: "04d"
                    }
                ],
                speed: 2.95,
                deg: 20,
                clouds: 92
            }
        ]
    };
    it('returns correct state when action type is "DEFAULT"', () => {
        expect(weatherReducer(undefined, { type: 'DEFAULT' })).toEqual(initialState)
    })

    it('check initial state - INITIAL STATE', () => {

        const changeState = {
            isLoading: false,
            error: '',
            weather: {}
        };
        expect(weatherReducer(initialState, {})).toEqual(changeState);
    })

    it('check initial state - REQUEST_WEATHER ', () => {
        const startAction = {
            type: types.REQUEST_WEATHER
        };
        const changeState = {
            isLoading: true,
            weather:{},
            error: ''
        };
        expect(weatherReducer(initialState, startAction)).toEqual(changeState);
    })
    it('check initial state - RECEIVE_WEATHER', () => {
        const startAction = {
            type: types.RECEIVE_WEATHER,
            weather: weather
        };
        const changeState = {
            isLoading: false,
            error: '',
            weather: weather,
        };
        expect(weatherReducer(initialState, startAction)).toEqual(changeState);
    })
    it('check initial state - RECEIVE_FAILURE', () => {
        const startAction = {
            type: types.RECEIVE_FAILURE,
            error: 'Error Occurred'
        };
        const changeState = {
            isLoading: false,
            error: 'Error Occurred',
            weather: {}
        };
        expect(weatherReducer(initialState, startAction)).toEqual(changeState);
    })
})
import * as constant from './constants';

const initialState = {
    isLoading: false,
    error: '',
    weather: {}
};
const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
    case constant.REQUEST_WEATHER:
    {
        return { ...state, isLoading: true };
    }

    case constant.RECEIVE_FAILURE:
    {
        return { ...state, isLoading: false, error: action.error, };
    }

    case constant.RECEIVE_WEATHER:
    {
        return { ...state, isLoading: false, weather: action.weather, };
    }

    default:
        return state;
    }
};
export default weatherReducer;
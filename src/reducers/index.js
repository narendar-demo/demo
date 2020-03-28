import { combineReducers } from 'redux';
import weatherReducer from '../bundle/weather/middleware/reducer';

const rootReducer = combineReducers(
    {
        weatherState: weatherReducer
    }
);

export default rootReducer;

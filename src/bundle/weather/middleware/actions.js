import axios from 'axios';
import * as constant from './constants';
/** Get List **/
const SERVICE_API = 'https://openweathermap.org/data/2.5/forecast/daily/?appid=b6907d289e10d714a6e88b30761fae22&id=3333229&units=metric';

const requestWeather = () => {
    return {
        type: constant.REQUEST_WEATHER
    };
};
const receiveWeather = (weather) => {
    return {
        type: constant.RECEIVE_WEATHER,
        weather: weather
    };
};
const receiveError = (error) => {
    return {
        type: constant.RECEIVE_FAILURE,
        error: error
    };
};
/** return all Weather list **/
const getWeather = () => {
    return async dispatch => {
        try {
            dispatch(requestWeather());
            const res = await axios.get(SERVICE_API);

            const data = await res.data;
            /***
             * filter city 
             * filter 5 days data
             *  */
            const { city, list } = data;
            let tempList = [];
            for (var i = 0; i < 5; i++) {
                tempList.push(list[i]);
            }
            const returnData = {
                 list: tempList
            }
            dispatch(receiveWeather(returnData));
        } catch (error) {
            dispatch(receiveError(error))
        }
    }
};
export default getWeather;
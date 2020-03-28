import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Container} from '../common/style/styles';
import WeatherCard from './card';
import getWeather from './middleware/actions';
import Notification from '../common/component/notification';
import Spinner from '../common/component/spinner';
@connect((state) => {
    return {
        weather: state.weatherState.weather,
        isLoading: state.weatherState.isLoading,
        error: state.weatherState.error
    };
})
export class WeatherHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {},
            isLoading: false,
            error: ''
        };
    }
    componentDidMount() {
        this.props.dispatch(getWeather());
    }
    /** Call each time stor disptach called **/
    static getDerivedStateFromProps(nextProps) {
        return {
            weather: nextProps.weather,
            isLoading: nextProps.isLoading,
            error: nextProps.error
        };
    }
    render() {
        const { weather, isLoading, error } = this.props;
        const { list, city } = weather;
     
        if (isLoading == true) {
            return <Spinner />;
        }
        else if (error != null && error.trim().length > 0) {
            return <Notification message={error} />;
        }
        return (<Container id="weatherContainer">

            { 
                list && 
                list.map((weather,index) => <WeatherCard indexKey={index} key={index} weatherInfo={weather} />)
            }
            
        </Container>);
    }
}
WeatherHome.propTypes = {
    weather: PropTypes.object,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    dispatch: PropTypes.func,
};
export default WeatherHome;
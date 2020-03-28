import React from 'react';
import { create } from 'react-test-renderer';
import WeatherCard from '../../../../src/bundle/weather/card';

describe('WeatherCard Snapshot Test', () => {
    const weather =
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

    };
    it('renders correctly with all props given', () => {
        const wrapper = create(<WeatherCard weatherInfo={weather} />)
            .toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
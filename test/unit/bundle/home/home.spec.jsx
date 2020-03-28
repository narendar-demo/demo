import React from 'react';
import { create} from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../../src/store/index';
import Home from '../../../../src/app';

jest.mock('../../../../src/bundle/weather/home', () => () => 'WeatherHome');

describe('Home Snapshot Test', () => {

    it('renders correctly with all props given', () => {
        const wrapper = create(<Provider store={store}><Home /></Provider>)
            .toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
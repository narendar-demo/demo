import React from 'react';
import { PropTypes } from 'prop-types';
import { Card, Weather, TempType, InputLabel,InputText, Row, Col } from '../common/style/styles';

export default class WeatherCard extends React.Component {

    tempFormat = (temp) => {
        return Math.round(temp);
    }
    dateFormat = (text) => {
        let date = new Date(1000 * text);
        let completeDate = date.getUTCDate() + '/' + date.getUTCMonth() + '/' + date.getUTCFullYear();
        return completeDate;
    }

    render() {
        const { weatherInfo,indexKey } = this.props;
        return (
            <Card id={indexKey}>
                <Row>
                    <Col>
                        <InputLabel>{this.dateFormat(weatherInfo.dt)}</InputLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Weather max="true" id={indexKey + '_max'}>
                            {this.tempFormat(weatherInfo.temp.max)}
                            <TempType>°C</TempType>
                        </Weather>
                        <Weather min="true" id={indexKey+ '_min'}>
                            {this.tempFormat(weatherInfo.temp.min)}
                            <TempType>°C</TempType>
                        </Weather>
                    </Col>
                </Row>
                <Row>
                    <Col><InputLabel>Pressure</InputLabel></Col>
                    <Col><InputText>{weatherInfo.pressure}</InputText></Col>
                </Row>
                <Row>
                    <Col><InputLabel>Humidity</InputLabel></Col>
                    <Col><InputText>{weatherInfo.humidity}</InputText></Col>
                </Row>
                <Row>
                    <Col><InputLabel>Desciption</InputLabel></Col>
                    <Col><InputText>{weatherInfo.weather[0].main}</InputText></Col>
                </Row>
            </Card>
        );
    }
}
WeatherCard.propTypes = {
    weatherInfo: PropTypes.object,
    indexKey: PropTypes.number,
};
'use strict';

import {expect} from 'chai'
import {
    getParamString,
    getOpenWeatherMapUrl
} from "./endpoints"
import {OPEN_WEATHER_APP_ID} from "./const";

/*
* Current weather:
* http://api.openweathermap.org/data/2.5/weather?q=Odessa,ua&APPID=a2bd60f26175b8075f02f7cd3398acd2&units=metric
*
* Forecast for 16 days:
* http://api.openweathermap.org/data/2.5/forecast?q=Odessa,ua&cnt=16&APPID=a2bd60f26175b8075f02f7cd3398acd2&units=metric
*/

describe('getParamString', () => {

    it('should translate undefined and {} into an empty string', () => {
        expect(getParamString()).to.equal('');
        expect(getParamString({})).to.equal('');
    });

    it('should translate an object into param string', () => {
        expect(getParamString({
            q: "Odessa,ua",
            cnt: 16,
            APPID: 123,
            units: "metric"
        })).to.equal('q=Odessa,ua&cnt=16&APPID=123&units=metric');
    });
});

describe('getOpenWeatherMapUrl', () => {
    it('should translate weather URL with parameters', () => {

        const weatherForOdessa = getOpenWeatherMapUrl(OPEN_WEATHER_APP_ID)("Odessa,ua");

        const params1 = {units: "metric"};
        expect(weatherForOdessa("weather")(params1)).to
            .equal(`http://api.openweathermap.org/data/2.5/weather?APPID=${OPEN_WEATHER_APP_ID}&q=Odessa,ua&units=metric`);

        const params2 = {cnt: 16, units: "metric"};
        expect(weatherForOdessa("forecast")(params2)).to
            .equal(`http://api.openweathermap.org/data/2.5/forecast?APPID=${OPEN_WEATHER_APP_ID}&q=Odessa,ua&cnt=16&units=metric`);
    });

});
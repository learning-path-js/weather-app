'use strict';

import {expect} from 'chai'

import {
    createWeatherHtml,
    createForecastHtml
} from './weather-view'
import {SPACE, CELSIUS} from "../utils/const";

describe('createWeatherHtml', () => {

    it('should return correct weather html', () => {

        const weatherData = {
            "weather": [
                {
                    "main": "Clear",
                    "description": "clear sky",
                }
            ],
            "main": {
                "temp": 11,
                "temp_min": 11,
                "temp_max": 11
            },
            "sys": {
                "country": "UA",
                "sunrise": 1552968187,
                "sunset": 1553011612
            },
            "name": "Odessa",
        };

        expect(createWeatherHtml(weatherData)).to.equal(
            `<li>Odessa, UA : Clear(clear sky)</li>` +
            `<li>Temperature (min, avg, max): 11, 11, 11${SPACE}${CELSIUS}</li>` +
            `<li>Sunrise: 06:03, Sunset: 18:06</li>`.trim());

    });
});

describe('createForecastHtml', () => {

    xit('should return correct forecast html', () => {

    });
});

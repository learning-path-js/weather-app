'use strict';

import {expect} from 'chai'

import {
    getCountry,
    getCity,
    getWeatherWithDesc
} from './weather-parser'


const NORMAL_RESPONSE = {
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "sys": {
        "type": 1,
        "id": 8915,
        "message": 0.0034,
        "country": "UA",
        "sunrise": 1552881906,
        "sunset": 1552925131
    },
    "id": 698740,
    "name": "Odessa",
};

describe('getCountry', () => {

    it('should return empty value if country not present', () => {
        expect(getCountry(
            {
                "sys": {
                    "sunrise": 1552881906,
                }
            })).to.equal("");
    });

    it('should return empty country for empty response', () => {
        expect(getCountry({})).to.equal("");
    });

    it('should get country properly', () => {
        expect(getCountry(NORMAL_RESPONSE)).to.equal("UA");
    });
});

describe('getCity', () => {
    it('should get city properly if present', () => {
        expect(getCity(NORMAL_RESPONSE)).to.equal("Odessa");
    });
});


describe('getWeatherWithDesc', () => {
    it('should get weather with description properly if present', () => {
        expect(getWeatherWithDesc(NORMAL_RESPONSE)).to.equal("Clear(clear sky)");
    });
});



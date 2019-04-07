'use strict';

import {
    createWeatherHtml,
    createForecastHtml
} from './display/weather-view'

import {getCombinedWeather} from './api/weather-api'

const searchCity = () => {

    const cityName = document.querySelector('.js-city').value;

    getCombinedWeather(cityName)
        .then(combinedResult => {
                document.querySelector('.js-weather').innerHTML = createWeatherHtml(combinedResult.weather);
                document.querySelector('.js-forecast').innerHTML = createForecastHtml(combinedResult.forecast);
            }
        ).catch(
        err => {
            console.log(err.message);
            document.querySelector('.js-weather').innerHTML = "Can't get weather for your city";
            document.querySelector('.js-forecast').innerHTML = "Can't get weather for your city";
        });
};

document.querySelector('.js-search').addEventListener('click', searchCity);









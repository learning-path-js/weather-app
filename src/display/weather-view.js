'use strict';

import {
    getCity,
    getCountry, getForecastRows,
    getSunrise,
    getSunset,
    getTemperatures,
    getWeatherWithDesc
} from "../parser/weather-parser";

export const createWeatherHtml = (weather) => {
    const res = [];

    res.push(`<li>${getCity(weather)}, ${getCountry(weather)} : ${getWeatherWithDesc(weather)}</li>`);
    res.push(`<li>Temperature (min, avg, max): ${getTemperatures(weather)}</li>`);
    res.push(`<li>Sunrise: ${getSunrise(weather)}, Sunset: ${getSunset(weather)}</li>`);

    return res.join('');
};

export const createForecastHtml = (forecast) => {

    const mainBody = getForecastRows(forecast)
        .map(singleForecastRow => {
            return `<tr><td>${singleForecastRow[0]}</td><td>${singleForecastRow[1]}</td><td>${singleForecastRow[2]}</td></tr>`
        }).join('');

    return `<table>
            <thead>
            <th>Date</th>
            <th>Temperature</th>
            <th>Weather</th></thead>
            <tbody>
            ${mainBody}
            </tbody>
        </table>`
        .trim();
};
'use strict';

import axios from 'axios';
import {getOpenWeatherMapUrl} from "../utils/endpoints";
import {OPEN_WEATHER_APP_ID} from "../utils/const";

const getTodayWeather = async (cityName) => {

    const weatherUrl = getOpenWeatherMapUrl(OPEN_WEATHER_APP_ID)(cityName)("weather")({units: "metric"});

    return axios.get(weatherUrl);
};

const getForecast = async (cityName) => {

    const forecastUrl = getOpenWeatherMapUrl(OPEN_WEATHER_APP_ID)(cityName)("forecast")({units: "metric", cnt: 8});

    return axios.get(forecastUrl);
};

export const getCombinedWeather = async (cityName) => {

    const [weather, forecast] = await Promise.all([
        getTodayWeather(cityName),
        getForecast(cityName)
    ]);

    return {weather: weather.data, forecast: forecast.data};
};

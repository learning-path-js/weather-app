import moment from 'moment-timezone';

import {SPACE, CELSIUS, HOUR_MIN_TIME_FORMAT, DATE_FORMAT} from "../utils/const";

const formatDate = (date) => {
    return moment.unix(date).format(DATE_FORMAT);
};

const formatTime = (time) => {
    return moment.unix(time).format(HOUR_MIN_TIME_FORMAT);
};

export const getCountry = (weatherResponse) => {

    if (weatherResponse.sys === undefined || weatherResponse.sys.country === undefined) {
        return '';
    }

    return weatherResponse.sys.country;
};

export const getCity = (weatherResponse) => {

    if (weatherResponse.name === undefined) {
        return '';
    }

    return weatherResponse.name;
};

export const getWeatherWithDesc = (weatherResponse) => {

    if (weatherResponse.weather === undefined || weatherResponse.weather.length < 1) {
        return '';
    }

    return `${weatherResponse.weather[0].main}(${weatherResponse.weather[0].description})`;
};


export const getTemperatures = (weatherResponse) => {

    const minTemp = Math.round(weatherResponse.main.temp_min);
    const maxTemp = Math.round(weatherResponse.main.temp_max);
    const avgTemp = Math.round(weatherResponse.main.temp);

    return `${minTemp}, ${avgTemp}, ${maxTemp}${SPACE}${CELSIUS}`;
};


export const getSunrise = (weather) => {
    return formatTime(weather.sys.sunrise);
};

export const getSunset = (weather) => {
    return formatTime(weather.sys.sunset);
};

export const getForecastRows = (weather) => {
    return weather.list.map(val => {
        return [formatDate(val.dt), `${Math.round(val.main.temp)} ${CELSIUS}`,
            `${val.weather[0].main}(${val.weather[0].description})`];
    });
};
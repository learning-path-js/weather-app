'use strict';

export const getParamString = (params = {}) => {
    return Object.entries(params).map(prop => `${prop[0]}=${prop[1]}`).join('&');
};

export const getOpenWeatherMapUrl = (appId) => (city) => (endpointName) => (params) => {
    return `http://api.openweathermap.org/data/2.5/${endpointName}?APPID=${appId}&q=${city}&${getParamString(params)}`;
};


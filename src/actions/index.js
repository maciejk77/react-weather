import axios from 'axios';

const API_KEY = '71230211a016e57d54afb29cf481b19f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},uk`;
  const request = axios.get(url);

  //console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
} 
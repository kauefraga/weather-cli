import 'dotenv/config';
import api from '../axios';

import WeatherAPIResponse from '../types/WeatherAPIResponse';

// TODO: transform this into a class

let cachedWeather: any = null;

async function getWeather(location: string): Promise<WeatherAPIResponse> {
  if (cachedWeather) {
    return cachedWeather
  }

  const uri = `current.json?key=${process.env.API_SECRET}&q=${location}`;

  const response = await api.get(uri);

  cachedWeather = response.data;

  return response.data;
}

export default getWeather;
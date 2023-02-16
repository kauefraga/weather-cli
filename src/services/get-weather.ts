import 'dotenv/config';
import api from '../axios';

import WeatherAPIResponse from '../types/weather-api-response';

export async function getWeather(location: string) {
  const uri = `current.json?key=${process.env.API_SECRET}&q=${location}`;

  const response = await api.get<WeatherAPIResponse>(uri);

  return response.data;
}

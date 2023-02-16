import WeatherAPIResponse from '../types/weather-api-response';

export function showApiResult(data: WeatherAPIResponse) {
  console.log({
    temp_c: data.current.temp_c,
    name: data.location.name,
    country: data.location.country,
    region: data.location.region,
    localtime: data.location.localtime,
    tz_id: data.location.tz_id,
  });
}

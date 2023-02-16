interface WeatherAPIResponse {
  location: {
    name: string;
    region: string;
    country: string;
    tz_id: string;
    localtime: string;
  },
  current: {
    temp_c: number;
    temp_f: number;
  }
}

export default WeatherAPIResponse;
import WeatherAPIResponse from '../types/WeatherAPIResponse';

class Answer {
  constructor (
    public data: WeatherAPIResponse
  ) {
    this.data = data;
  }

  // TODO: for...in loop
  showJson() {
    console.log({
      temp_c: this.data.current.temp_c,
      name: this.data.location.name,
      country: this.data.location.country,
      region: this.data.location.region,
      localtime: this.data.location.localtime,
      tz_id: this.data.location.tz_id,
    });
  }
}

export default Answer;
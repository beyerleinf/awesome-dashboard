export interface OpenWeatherCurrentWeather {
  coord: OpenWeatherCoord;
  weather: OpenWeatherWeather[];
  main: OpenWeatherMain;

  wind: OpenWeatherWind;
  clouds: OpenWeatherClouds;
  rain: OpenWeatherRain | null;
  snow: OpenWeatherSnow | null;

  /**
   * Time of data calculation, unix, UTC
   */
  dt: number;
  sys: OpenWeatherSys;

  /**
   * Shift in seconds from UTC
   */
  timezone: number;

  /**
   * City ID
   */
  id: number;

  /**
   * City name
   */
  name: string;
}

export interface OpenWeatherClouds {
  /**
   *  Cloudiness, %
   */
  all: number;
}

export interface OpenWeatherCoord {
  /**
   * City geo location, longitude
   */
  lon: number;

  /**
   * City geo location, latitude
   */
  lat: number;
}

export interface OpenWeatherMain {
  /**
   * Temperature.
   * Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   */
  temp: number;

  /**
   * Temperature. This temperature parameter accounts for the human perception of weather.
   * Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   */
  feels_like: number;

  /**
   * Minimum temperature at the moment.
   * This is minimal currently observed temperature (within large megalopolises and urban areas).
   * Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   */
  temp_min: number;

  /**
   * Maximum temperature at the moment.
   * This is maximal currently observed temperature (within large megalopolises and urban areas).
   * Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
   */
  temp_max: number;

  /**
   * Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
   */
  pressure: number;

  /**
   * Humidity, %
   */
  humidity: number;

  /**
   * Atmospheric pressure on the sea level, hPa
   */
  sea_level: number;

  /**
   * Atmospheric pressure on the ground level, hPa
   */
  grnd_level: number;
}

export interface OpenWeatherSys {
  /**
   * Country code (GB, JP etc.)
   */
  country: string;

  /**
   * Sunrise time, unix, UTC
   */
  sunrise: number;

  /**
   * Sunset time, unix, UTC
   */
  sunset: number;
}

export interface OpenWeatherWeather {
  /**
   * Weather condition id
   */
  id: number;

  /**
   * Group of weather parameters (Rain, Snow, Extreme etc.)
   */
  main: string;

  /**
   * Weather condition within the group.
   */
  description: string;

  /**
   * Weather icon id
   */
  icon: string;
}

export interface OpenWeatherWind {
  /**
   * Wind speed.
   * Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
   */
  speed: number;

  /**
   * Wind direction, degrees (meteorological)
   */
  deg: number;

  /**
   * Wind gust.
   * Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
   */
  gust: number;
}

export interface OpenWeatherRain {
  /**
   * Rain volume for the last 1 hour, mm
   */
  '1h': number;

  /**
   * Rain volume for the last 3 hours, mm
   */
  '3h': number;
}

export interface OpenWeatherSnow {
  /**
   * Snow volume for the last 1 hour, mm
   */
  '1h': number;

  /**
   * Snow volume for the last 3 hours, mm
   */
  '3h': number;
}

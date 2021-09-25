import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OpenWeatherWeather } from 'src/weather/types';

@Injectable()
export class OpenWeatherService {
  constructor(private http: HttpService, private configService: ConfigService) {}

  getCurrentWeather(zipCode: string, countryCode: string) {
    return this.doRequest<OpenWeatherWeather>('weather', `${zipCode},${countryCode}`);
  }

  private doRequest<T>(endpoint: string, query: string) {
    const apiKey = this.configService.get<string>('OPEN_WEATHER_MAP_API_KEY');

    return this.http.get<T>(`https://api.openweathermap.org/data/2.5/${endpoint}`, {
      params: {
        q: query,
        appid: apiKey,
      },
    });
  }
}

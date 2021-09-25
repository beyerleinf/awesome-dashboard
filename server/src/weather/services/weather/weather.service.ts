import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WeatherLocation, WeatherLocationDocument } from 'src/weather/schemas/weather-location.schema';

@Injectable()
export class WeatherService {
  constructor(@InjectModel(WeatherLocation.name) private weatherLocationModel: Model<WeatherLocationDocument>) {}

  async findAll() {
    return this.weatherLocationModel.find().exec();
  }
}

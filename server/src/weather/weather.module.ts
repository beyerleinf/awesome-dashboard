import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WeatherLocation, WeatherLocationSchema } from './schemas/weather-location.schema';
import { OpenWeatherService, WeatherService } from './services';
import { WeatherResolver } from './weather.resolver';

@Module({
  imports: [HttpModule, MongooseModule.forFeature([{ name: WeatherLocation.name, schema: WeatherLocationSchema }])],
  providers: [OpenWeatherService, WeatherService, WeatherResolver],
})
export class WeatherModule {}

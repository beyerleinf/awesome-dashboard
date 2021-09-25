import { Args, Query, Resolver } from '@nestjs/graphql';
import { WeatherLocation } from './schemas/weather-location.schema';

@Resolver(() => WeatherLocation)
export class WeatherResolver {
  @Query(() => [WeatherLocation])
  async weatherLocations() {
    return [];
  }
}

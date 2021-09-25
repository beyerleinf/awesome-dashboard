import { Args, Query, Resolver } from '@nestjs/graphql';
import { PingResult } from './schemas/ping-result.schema';
import { PingService } from './services';

@Resolver(() => PingResult)
export class PingResultResolver {
  constructor(private pingService: PingService) {}

  @Query(() => PingResult)
  async lastPingResult() {
    return this.pingService.findLatest();
  }

  @Query(() => [PingResult])
  async pingResults(@Args('start', { type: () => Date }) start: Date, @Args('end', { type: () => Date }) end: Date) {
    return this.pingService.findInTimeRange(start, end);
  }
}

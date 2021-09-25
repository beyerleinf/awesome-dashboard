import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { promise as Ping } from 'ping';
import { PingService } from '../ping/ping.service';

@Injectable()
export class PingCronService {
  private readonly logger = new Logger(PingCronService.name);

  constructor(private pingService: PingService) {}

  @Cron(CronExpression.EVERY_5_MINUTES)
  async doPing() {
    this.logger.verbose('Running scheduled ping task');

    const result = await Ping.probe('1.1.1.1', { min_reply: 10 });

    await this.pingService.create({
      avgPing: Number(result.avg),
      minPing: Number(result.min),
      maxPing: Number(result.max),
      packetLoss: Number((result as any).packetLoss),
      stdDeviation: Number(result.stddev),
    });

    this.logger.verbose('Finished scheduled ping task');
  }
}

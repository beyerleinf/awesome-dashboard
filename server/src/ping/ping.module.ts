import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PingResultResolver } from './ping-result.resolver';
import { PingResult, PingResultSchema } from './schemas/ping-result.schema';
import { PingCronService, PingService } from './services';

@Module({
  providers: [PingCronService, PingService, PingResultResolver],
  imports: [MongooseModule.forFeature([{ name: PingResult.name, schema: PingResultSchema }])],
})
export class PingModule {}

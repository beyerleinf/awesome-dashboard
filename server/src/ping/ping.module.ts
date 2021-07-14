import { Module } from '@nestjs/common';
import { PingCronService, PingService } from './services';
import { MongooseModule } from '@nestjs/mongoose';
import { PingResult, PingResultSchema } from './schemas/ping-result.schema';

@Module({
  providers: [PingCronService, PingService],
  imports: [MongooseModule.forFeature([{ name: PingResult.name, schema: PingResultSchema }])],
})
export class PingModule {}

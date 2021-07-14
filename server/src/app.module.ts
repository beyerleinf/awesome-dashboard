import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PingModule } from './ping/ping.module';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PingModule, ScheduleModule.forRoot(), MongooseModule.forRoot('mongodb://localhost/dashboard')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

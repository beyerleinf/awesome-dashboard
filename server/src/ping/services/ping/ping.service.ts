import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePingResultDTO } from 'src/ping/dto/create-ping-result';
import { PingResult, PingResultDocument } from 'src/ping/schemas/ping-result.schema';

@Injectable()
export class PingService {
  constructor(@InjectModel(PingResult.name) private pingResultModel: Model<PingResultDocument>) {}

  async create(pingResult: CreatePingResultDTO) {
    const created = new this.pingResultModel(pingResult);
    return created.save();
  }

  async findAll() {
    return this.pingResultModel.find().exec();
  }
}

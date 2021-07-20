import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePingResultDTO } from 'src/ping/dto/create-ping-result';
import { PingResult, PingResultDocument } from 'src/ping/schemas/ping-result.schema';

@Injectable()
export class PingService {
  constructor(@InjectModel(PingResult.name) private pingResultModel: Model<PingResultDocument>) {}

  async create(pingResult: CreatePingResultDTO) {
    const created = new this.pingResultModel({ ...pingResult, timestamp: new Date() });
    return created.save();
  }

  async findAll() {
    return this.pingResultModel.find().exec();
  }

  async findLatest() {
    return this.pingResultModel.findOne().sort({ _id: -1 }).limit(1);
  }

  async findInTimeRange(start: Date, end: Date) {
    return this.pingResultModel.find({
      timestamp: {
        $gte: start,
        $lte: end,
      },
    });
  }
}

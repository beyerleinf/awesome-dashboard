import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class PingResult {
  @Prop({ required: true })
  avgPing: number;

  @Prop({ required: true })
  minPing: number;

  @Prop({ required: true })
  maxPing: number;

  @Prop({ required: true })
  packetLoss: number;

  @Prop({ required: true })
  stdDeviation: number;
}

export type PingResultDocument = PingResult & Document;
export const PingResultSchema = SchemaFactory.createForClass(PingResult);

import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
export class PingResult {
  @Field(() => Float)
  @Prop({ required: true })
  avgPing: number;

  @Field(() => Float)
  @Prop({ required: true })
  minPing: number;

  @Field(() => Float)
  @Prop({ required: true })
  maxPing: number;

  @Field(() => Float)
  @Prop({ required: true })
  packetLoss: number;

  @Field(() => Float)
  @Prop({ required: true })
  stdDeviation: number;

  @Field(() => Date)
  @Prop({ required: true })
  timestamp: Date;
}

export type PingResultDocument = PingResult & Document;
export const PingResultSchema = SchemaFactory.createForClass(PingResult);

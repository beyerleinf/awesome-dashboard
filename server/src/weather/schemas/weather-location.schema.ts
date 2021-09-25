import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
export class WeatherLocation {
  @Field(() => String)
  @Prop({ required: true })
  name: string;

  @Field(() => String)
  @Prop({ required: true })
  zipCode: string;

  @Field(() => String)
  @Prop({ required: true })
  countryCode: string;
}

export type WeatherLocationDocument = WeatherLocation & Document;
export const WeatherLocationSchema = SchemaFactory.createForClass(WeatherLocation);

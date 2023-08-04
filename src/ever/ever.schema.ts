import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EverDocument = Ever & Document;
@Schema()
export class Ever extends Document {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  content: string;
}
export const EverSchema = SchemaFactory.createForClass(Ever);

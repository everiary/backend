import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EverDocument = Ever & Document;

@Schema({
  timestamps: true,
  //id: true
})
export class Ever extends Document {
  /*@Prop()
  _id: string;*/
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  content: string;
}
export const EverSchema = SchemaFactory.createForClass(Ever);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EverDocument = Ever & Document;

@Schema({
  timestamps: {
    currentTime() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000)
    },
  },
})
export class Ever extends Document {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  content: string;
}
export const EverSchema = SchemaFactory.createForClass(Ever);

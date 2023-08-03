import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EverModule } from './ever/ever.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [EverModule,MongooseModule.forRoot('mongodb://localhost:27017/everiary')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

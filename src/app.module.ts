import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EverModule } from './ever/ever.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { jwtAuth } from './guard/jwt.guard';

@Module({
  imports: [
    EverModule,
    MongooseModule.forRoot('mongodb://localhost:27017/everiary'),
    AuthModule,
  ],
  controllers: [AppController],
  // 注册为全局守卫
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: jwtAuth,
    },
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfigs } from '../config.example';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './auth.schema';
import JwtAuthStrategy from '../strategy/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({
      secret: jwtConfigs.secret,
      signOptions: { expiresIn: jwtConfigs.expiresIn },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtAuthStrategy],
})
export class AuthModule {}

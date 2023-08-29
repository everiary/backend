import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from '../dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from './auth.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  // 注册Schema后，可以使用 @InjectModel() 装饰器将 User 模型注入到 UserService 中:
  constructor(
    @InjectModel('User') private userTest: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async signup(signupData: CreateAuthDto) {
    const findUser = await this.userTest.findOne({
      username: signupData.username,
    });
    if (findUser && findUser.username === signupData.username)
      return '用户已存在';
    // 对密码进行加密处理
    signupData.password = bcrypt.hashSync(signupData.password, 10);
    const createUser = new this.userTest(signupData);
    const temp = await createUser.save();
    return temp;
  }

  // 登录
  async login(loginData: CreateAuthDto) {
    const findUser = await this.userTest
      .findOne({
        username: loginData.username,
      })
      .exec();
    // 没有找到
    if (!findUser) return new BadRequestException('用户不存在');

    // 找到了对比密码
    const compareRes: boolean = bcrypt.compareSync(
      loginData.password,
      findUser.password,
    );
    // 密码不正确
    if (!compareRes) return new BadRequestException('密码不正确');
    const payload = { username: findUser.username };

    return {
      access_token: this.jwtService.sign(payload),
      msg: '登录成功',
    };
  }
}

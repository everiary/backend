import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Ever, EverDocument } from './ever.schema';
import { CreateEverDto } from 'src/dto/ever.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EverService {
  // 注册Schema后，可以使用 @InjectModel() 装饰器将 User 模型注入到 UserService 中:
  constructor(@InjectModel('Ever') private userTest: Model<EverDocument>) {}
  // 添加
  async create(createUserDto: CreateEverDto): Promise<Ever> {
    const createUser = new this.userTest(createUserDto);
    const temp = await createUser.save();
    return temp;
  }
  // 查找
  async findAll(): Promise<Ever[]> {
    // 这里是异步的
    const temp = await this.userTest.find().exec();
    return temp;
  }
  async findOneById(sid: string): Promise<Ever[]> {
    // 这里是异步的
    const temp = await this.userTest.find({ _id: sid });
    return temp;
  }
  // 删除
  async deleteOne(sid: number): Promise<object> {
    // 这里是异步的  remove 方法删除成功并返回相应的个数
    const temp = await this.userTest.deleteOne({ _id: sid });
    return temp;
  }
  // 修改
  async updateEver(sid: string, data: any) {
    // 这里是异步的  remove 方法删除成功并返回相应的个数
    const temp = await this.userTest.updateOne({ _id: sid }, { $set: data });
    return temp;
  }
  //随机获取一条
  async getRandom(): Promise<Ever[]> {
    // 这里是异步的  remove 方法删除成功并返回相应的个数
    const temp = await this.userTest.aggregate([ { $sample: { size: 1 } } ]).exec();
    return temp;
  }
}

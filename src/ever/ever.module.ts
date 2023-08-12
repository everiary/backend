import { Module } from '@nestjs/common';
import { EverController, EverPublicController } from './ever.controller';
import { EverService } from './ever.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EverSchema } from './ever.schema';
@Module({
  // MongooseModule提供了forFeature()方法来配置模块，包括定义哪些模型应该注册在当前范围中。
  // 如果你还想在另外的模块中使用这个模型，将MongooseModule添加到CatsModule的exports部分并在其他模块中导入CatsModule。
  // 这里的 name:'User' 为数据库表名称与 service 中注入的表名称对应两者不一样会报错
  imports: [MongooseModule.forFeature([{ name: 'Ever', schema: EverSchema }])],
  controllers: [EverController, EverPublicController],
  providers: [EverService],
})
export class EverModule {}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
// 引入用户服务
import { EverService } from './ever.service';
// 引入创建用户 DTO 用于限制从接口处传来的参数
import { CreateEverDto } from 'src/dto/ever.dto';
// 配置局部路由
@Controller('ever')
export class EverController {
  constructor(private readonly everService: EverService) {}
  // 创建user路由 user/createUser
  @Post('')
  async createUser(@Body() body: CreateEverDto) {
    return this.everService.create(body);
  }
  //查找所有 user 路由
  @Get('findAll')
  async findAll() {
    return this.everService.findAll();
  }
  // 查找某一个用户路由
  @Get('find')
  async findOne(@Query() query: any) {
    return this.everService.findOne(query.title);
  }
  // 删除一个用户的路由
  @Delete(':sid')
  deleteUser(@Param() param: any) {
    return this.everService.deleteOne(param.sid);
  }
  // 更改用户信息的路由
  @Put(':sid')
  updateUser(@Body() body: any, @Param() param: any) {
    return this.everService.updateUser(param.sid, body);
  }
}

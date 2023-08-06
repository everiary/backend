import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Query,
} from '@nestjs/common';
// 引入用户服务
import { EverService } from './ever.service';
// 引入创建用户 DTO 用于限制从接口处传来的参数
import { CreateEverDto } from 'src/dto/ever.dto';
import { ApiOperation } from '@nestjs/swagger';
// 配置局部路由
@Controller('ever')
export class EverController {
  constructor(private readonly everService: EverService) {}

  @Get('')
  @ApiOperation({
    summary: '获取所有everiary，返回一个Array',
  })
  async findAll() {
    return this.everService.findAll();
  }

  @Post('')
  @ApiOperation({
    summary: '创建一条everiary',
  })
  async createUser(@Body() body: CreateEverDto) {
    return this.everService.create(body);
  }

  @Get('find')
  @ApiOperation({
    summary: '使用_id获取单个everiary',
  })
  async findOne(@Query() query: any) {
    return this.everService.findOne(query.title);
  }

  @Delete(':sid')
  @ApiOperation({
    summary: '使用_id删除单个everiary',
  })
  deleteUser(@Param() param: any) {
    return this.everService.deleteOne(param.sid);
  }

  @Patch(':sid')
  @ApiOperation({
    summary: '使用_id更改单个everiary',
  })
  updateUser(@Body() body: any, @Param() param: any) {
    return this.everService.updateUser(param.sid, body);
  }
}
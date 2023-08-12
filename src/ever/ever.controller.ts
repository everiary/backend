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
  
  @Get(':sid')
  @ApiOperation({
    summary: '使用id获取单个everiary',
  })
  async findOneById(@Param() param: any) {
    return this.everService.findOneById(param.sid);
  }

  @Post('')
  @ApiOperation({
    summary: '创建一条everiary',
  })
  async createEver(@Body() body: CreateEverDto) {
    return this.everService.create(body);
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
  updateEver(@Body() body: any, @Param() param: any) {
    return this.everService.updateEver(param.sid, body);
  }
}

@Controller('public')
export class EverPublicController {
  constructor(private readonly everService: EverService) {}
  @Get('random')
  @ApiOperation({
    summary: '获取一条随机的everiary',
  })
  getRandom() {
    return this.everService.getRandom();
  }
}
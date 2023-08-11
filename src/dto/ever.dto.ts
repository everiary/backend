import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class CreateEverDto {
  @ApiProperty({ example: 'I want to be a wemsx' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'blablabla' })
  @IsNotEmpty()
  content: string;
}
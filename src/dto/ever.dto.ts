import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class CreateEverDto {
  @ApiProperty({ example: 'cookie' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'cookieboty' })
  @IsNotEmpty()
  content: string;
}
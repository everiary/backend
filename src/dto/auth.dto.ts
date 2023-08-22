import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class CreateAuthDto {
  @ApiProperty({ example: 'I want to be a wemsx' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: 'blablabla' })
  @IsNotEmpty()
  password: string;
}

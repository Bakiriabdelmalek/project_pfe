import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  Matches,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';



export class SignupDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email address of the user',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  

  @ApiProperty({
    example: 'password123',
    description: 'The password for the account',
    minLength: 8,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;


  @IsString()
  @IsNotEmpty()
  @MinLength(8)
   username: string;
}

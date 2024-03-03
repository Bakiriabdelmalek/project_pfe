import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'teworig303@molyg.com',
    description: 'The email of the user',
  })
  email: string;

  @ApiProperty({
    example: 'falekfalek',
    description: 'The password of the user',
  })
  password: string;
}

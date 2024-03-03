import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  Matches,
  IsEnum,
  IsInt,
  IsOptional,
  IsUUID,
} from 'class-validator';



enum Speciality {
  GENERALISTE = 'GENERALISTE',
  CARDIO = 'CARDIO',
  OTHERS = 'OTHERS',
}

export class CreateProfessorAccountDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(05|06|07)\d{8}$/, {
    message:
      'Phone number must start with 05, 06, or 07 and contain 8 additional digits.',
  })
  phone?: string;

 

  // Professor specific fields
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  secondaryName: string;

  @IsInt()
  @IsNotEmpty()
  age: number;

  @IsEnum(Speciality)
  @IsNotEmpty()
  speciality: Speciality;

  @IsUUID()
  @IsOptional()
  serviceDepartmentId?: string;
}

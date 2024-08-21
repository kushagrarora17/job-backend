import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateRecruiterDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  company: string;
}

import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateFreelancerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  skills?: string;

  @IsOptional()
  @IsString()
  github?: string;
}

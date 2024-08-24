import {
  ArrayMaxSize,
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateJobDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsString()
  @IsNotEmpty()
  skills: string[];

  @IsNotEmpty()
  @IsNumber()
  recruiterId: number;
}

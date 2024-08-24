import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateApplicationDto {
  @IsNumber()
  @IsNotEmpty()
  jobId: number;

  @IsNumber()
  @IsNotEmpty()
  freelancerId: number;

  @IsString()
  status: 'APPLIED' | 'SUBMITTED' | 'REJECTED';

  @IsBoolean()
  isArchived: boolean;
}

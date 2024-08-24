import { Module } from '@nestjs/common';
import { RecruiterService } from './recruiter.service';
import { RecruiterController } from './recruiter.controller';
import { Recruiter } from './entities/recruiter.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [RecruiterController],
  providers: [RecruiterService],
  imports: [SequelizeModule.forFeature([Recruiter])],
  exports: [SequelizeModule],
})
export class RecruiterModule {}

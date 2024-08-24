import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { JobController } from './job.controller';
import { Job } from './entities/job.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [JobController],
  providers: [JobService],
  imports: [SequelizeModule.forFeature([Job])],
  exports: [SequelizeModule],
})
export class JobModule {}

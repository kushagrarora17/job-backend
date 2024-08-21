import { Module } from '@nestjs/common';
import { FreelancerService } from './freelancer.service';
import { FreelancerController } from './freelancer.controller';
import { Freelancer } from './entities/freelancer.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Freelancer])],
  controllers: [FreelancerController],
  providers: [FreelancerService],
  exports: [SequelizeModule],
})
export class FreelancerModule {}

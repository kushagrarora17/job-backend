import { Module } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { ApplicationController } from './application.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Application } from './entities/application.entity';

@Module({
  controllers: [ApplicationController],
  providers: [ApplicationService],
  imports: [SequelizeModule.forFeature([Application])],
  exports: [SequelizeModule],
})
export class ApplicationModule {}

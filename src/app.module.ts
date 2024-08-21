import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { FreelancerModule } from './freelancer/freelancer.module';
import { RecruiterModule } from './recruiter/recruiter.module';
import { JobModule } from './job/job.module';
import { ApplicationModule } from './application/application.module';
import { Freelancer } from './freelancer/entities/freelancer.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'jobdev',
      models: [Freelancer],
      autoLoadModels: true,
      synchronize: true,
    }),
    FreelancerModule,
    RecruiterModule,
    JobModule,
    ApplicationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

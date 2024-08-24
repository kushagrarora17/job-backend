import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';

@Injectable()
export class JobService {
  constructor(
    @InjectModel(Job)
    private readonly jobModel: typeof Job,
  ) {}

  // Create a new Job
  async create(createJobDto: CreateJobDto): Promise<Job> {
    return await this.jobModel.create({ ...createJobDto });
  }

  // Get all Jobs
  async findAll(): Promise<Job[]> {
    return await this.jobModel.findAll();
  }

  // Get a single Job by ID
  async findOne(id: number): Promise<Job> {
    const job = await this.jobModel.findByPk(id);
    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
    return job;
  }

  // Update a Job by ID
  async update(id: number, updateJobDto: UpdateJobDto): Promise<Job> {
    const job = await this.findOne(id);
    await job.update(updateJobDto);
    return job;
  }

  // Delete a Job by ID
  async remove(id: number): Promise<void> {
    const job = await this.findOne(id);
    await job.destroy();
  }
}

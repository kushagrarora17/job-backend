import { CreateRecruiterDto } from './dto/create-recruiter.dto';
import { UpdateRecruiterDto } from './dto/update-recruiter.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Recruiter } from './entities/recruiter.entity';

@Injectable()
export class RecruiterService {
  constructor(
    @InjectModel(Recruiter)
    private readonly recruiterModel: typeof Recruiter,
  ) {}

  // Create a new Recruiter
  async create(createRecruiterDto: CreateRecruiterDto): Promise<Recruiter> {
    return await this.recruiterModel.create({ ...createRecruiterDto });
  }

  // Get all Recruiters
  async findAll(): Promise<Recruiter[]> {
    return await this.recruiterModel.findAll();
  }

  // Get a single Recruiter by ID
  async findOne(id: number): Promise<Recruiter> {
    const recruiter = await this.recruiterModel.findByPk(id);
    if (!recruiter) {
      throw new NotFoundException(`Recruiter with ID ${id} not found`);
    }
    return recruiter;
  }

  // Update a Recruiter by ID
  async update(
    id: number,
    updateRecruiterDto: UpdateRecruiterDto,
  ): Promise<Recruiter> {
    const recruiter = await this.findOne(id);
    await recruiter.update(updateRecruiterDto);
    return recruiter;
  }

  // Delete a Recruiter by ID
  async remove(id: number): Promise<void> {
    const recruiter = await this.findOne(id);
    await recruiter.destroy();
  }
}

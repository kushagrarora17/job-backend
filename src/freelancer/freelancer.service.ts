import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFreelancerDto } from './dto/create-freelancer.dto';
import { UpdateFreelancerDto } from './dto/update-freelancer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Freelancer } from './entities/freelancer.entity';

@Injectable()
export class FreelancerService {
  constructor(
    @InjectModel(Freelancer)
    private freelancerModel: typeof Freelancer,
  ) {}

  // Method to create a new freelancer
  async createFreelancer(
    createFreelancerDto: CreateFreelancerDto,
  ): Promise<Freelancer> {
    const freelancer = await this.freelancerModel.create({
      ...createFreelancerDto,
    });
    return freelancer;
  }

  // Method to update an existing freelancer
  async updateFreelancer(
    id: number,
    updateFreelancerDto: UpdateFreelancerDto,
  ): Promise<Freelancer> {
    const freelancer = await this.freelancerModel.findByPk(id);

    if (!freelancer) {
      throw new NotFoundException(`Freelancer with id ${id} not found`);
    }

    await freelancer.update(updateFreelancerDto);
    return freelancer;
  }

  async findAll(): Promise<Freelancer[]> {
    return this.freelancerModel.findAll();
  }

  findOne(id: number): Promise<Freelancer> {
    return this.freelancerModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Application } from './entities/application.entity'; // Import the Application model
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectModel(Application)
    private readonly applicationModel: typeof Application,
  ) {}

  // Create a new Application
  async create(
    createApplicationDto: CreateApplicationDto,
  ): Promise<Application> {
    try {
      return await this.applicationModel.create({ ...createApplicationDto });
    } catch (error) {
      throw new Error('Error creating application: ' + error.message);
    }
  }

  // Get all Applications
  async findAll(): Promise<Application[]> {
    return await this.applicationModel.findAll();
  }

  // Get a single Application by ID
  async findOne(id: number): Promise<Application> {
    const application = await this.applicationModel.findByPk(id);
    if (!application) {
      throw new NotFoundException(`Application with ID ${id} not found`);
    }
    return application;
  }

  // Update an Application by ID
  async update(
    id: number,
    updateApplicationDto: UpdateApplicationDto,
  ): Promise<Application> {
    const application = await this.findOne(id);
    await application.update(updateApplicationDto);
    return application;
  }

  // Delete an Application by ID
  async remove(id: number): Promise<void> {
    const application = await this.findOne(id);
    await application.destroy();
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { FreelancerService } from './freelancer.service';
import { CreateFreelancerDto } from './dto/create-freelancer.dto';
import { UpdateFreelancerDto } from './dto/update-freelancer.dto';

@Controller('freelancer')
export class FreelancerController {
  constructor(private readonly freelancerService: FreelancerService) {}

  @Post()
  create(@Body() createFreelancerDto: CreateFreelancerDto) {
    return this.freelancerService.createFreelancer(createFreelancerDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateFreelancerDto: UpdateFreelancerDto,
  ) {
    return this.freelancerService.updateFreelancer(id, updateFreelancerDto);
  }

  @Get()
  findAll() {
    return this.freelancerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.freelancerService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.freelancerService.remove(id);
  }
}

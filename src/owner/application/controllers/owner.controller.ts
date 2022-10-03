import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { OwnerService } from '../../domain/services/owner.service';
import { CreateOwnerDto } from '../dto/create-owner.dto';
import { UpdateOwnerDto } from '../dto/update-owner.dto';
import { CarOwnerDTO } from '../dto/add-Car-Owner.dto';

@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post('/create')
  create(@Body() createOwnerDto: CreateOwnerDto) {
    return this.ownerService.create(createOwnerDto);
  }

  @Get()
  findAll() {
    return this.ownerService.findAll();
  }

  @Get('/name/:name')
  findOne(@Param('name') name: string) {
    return this.ownerService.findOne(name);
  }

  @Post(':id')
  update(@Body() updateOwnerDto: UpdateOwnerDto) {
    return this.ownerService.update(updateOwnerDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.ownerService.remove(+id);
  }

  @Post('/addCar')
  addCar(@Body() addCarOwnerDto: CarOwnerDTO) {
    return 'Car linked to a Owner';
  }
}

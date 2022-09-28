import { Controller, Body, Post, Get, Delete, Param } from '@nestjs/common';
import { CarCreateDto } from '../dto/create.car.dto';
import { CarService } from '../../domain/services/car.service';
import { ParseUUIDPipe } from '@nestjs/common/pipes';

@Controller('cars')
export class CarsController {
  constructor(private readonly carServise: CarService) {}

  @Post('/create')
  createCar(@Body() createCardto: CarCreateDto) {
    return this.carServise.createCar(createCardto);
  }
  @Get('/getCars')
  getAllCars() {
    return this.carServise.getAllCars();
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carServise.deleteCar(id);
  }
}

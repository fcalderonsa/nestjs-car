import { Controller, Body, Post, Get, Delete, Param, Res, HttpStatus } from '@nestjs/common';
import { CarCreateDto } from '../dto/create.car.dto';
import { CarService } from '../../domain/services/car.service';
import { ParseUUIDPipe, ValidationPipe } from '@nestjs/common/pipes';
import { UpdateCarDto } from '../dto/update.car.dto';
import { Vehicle } from 'src/cars/application/dto/vehicle.abstract';

@Controller('cars')
export class CarsController {
  constructor(private readonly carServise: CarService) {}

  @Post('/create')
  createCar(@Body() createCardto: CarCreateDto) {
    return this.carServise.createCar(createCardto);
  }
  @Get('/getAll')
  getAllCars() {
    return this.carServise.getAllCars();
  }

  @Post('/update')
  updateCar(@Body() updateCardto: UpdateCarDto) {
    return this.carServise.updateCar(updateCardto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carServise.deleteCar(id);
  }
  @Post('/hyperCar')
  createHyperCar(@Body() vehicle: Vehicle) {
    return this.carServise.createhyperCar(vehicle);
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarCreateDto } from '../../application/dto/create.car.dto';
import { CarRepository } from '../../repository/cars.repository';
import { Car } from '../entities/car.entity';
import { UpdateCarDto } from '../../application/dto/update.car.dto';

@Injectable()
export class CarService {
  private readonly log = new Logger();
  constructor(
    @InjectRepository(CarRepository)
    private carsRepository: CarRepository,
  ) {}

  async createCar(createCardto: CarCreateDto) {
    this.carsRepository.createCar(createCardto);
    this.log.debug(createCardto);
  }
  async getAllCars(): Promise<Car[]> {
    const cars = this.carsRepository.getAllCars();
    this.log.debug(cars);
    return cars;
  }
  async deleteCar(id: string): Promise<void> {
    const result = this.carsRepository.deleteCar(id);
  }

  async updateCar(updateCardto: UpdateCarDto) {}
}

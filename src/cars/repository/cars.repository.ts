import { HttpStatus, NotFoundException } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { CarCreateDto } from '../application/dto/create.car.dto';
import { Car } from '../domain/entities/car.entity';
import { Brand } from '../../brand/domain/entities/brand.entity';
import { UpdateCarDto } from '../application/dto/update.car.dto';

@EntityRepository(Car)
export class CarRepository extends Repository<Car> {
  async createCar(createCardto: CarCreateDto): Promise<Car> {
    const { brand, model, year } = createCardto;
    const cars = this.create({
      brand,
      model,
      year,
    });
    await this.save(cars);
    return cars;
  }
  async getAllCars(): Promise<Car[]> {
    const query = this.createQueryBuilder('cars');
    query.leftJoinAndSelect('cars.brand', 'name');
    query.take(3);
    const cars = await query.getMany();
    if (!cars) {
      throw new NotFoundException('Cars not found');
    }
    return cars;
  }

  async deleteCar(id: string): Promise<void> {
    const result = await this.delete(id);
  }

  async updateCar(updateCarDto: UpdateCarDto) {}
}

import { NotFoundException } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { CarCreateDto } from '../application/dto/create.car.dto';
import { Car } from '../domain/entities/car.entity';
import { UpdateCarDto } from '../application/dto/update.car.dto';

@EntityRepository(Car)
export class CarRepository extends Repository<Car> {
  async createCar(createCardto: CarCreateDto): Promise<Car> {
    const { brand, model, year, typeVehicle } = createCardto;
    const cars = this.create({
      brand,
      model,
      year,
      typeVehicle,
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

  async findOneCar(id: string): Promise<Car> {
    const oneCar = await this.findOne(id);
    if (!oneCar) {
      throw new NotFoundException(`Car with this id '${id}' not found`);
    }
    return oneCar;
  }

  async deleteCar(id: string): Promise<void> {
    const result = await this.delete(id);
  }

  async updateCar(updateCarDto: UpdateCarDto): Promise<Car> {
    const { id, brand, model, year, typeVehicle } = updateCarDto;
    const carToUpdate = await this.findOneCar(id);
    carToUpdate.brand = brand;
    carToUpdate.model = model;
    carToUpdate.year = year;
    carToUpdate.typeVehicle = typeVehicle;
    await this.save(carToUpdate);
    return carToUpdate;
  }
}

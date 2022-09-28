import { Repository, EntityRepository } from 'typeorm';
import { CarCreateDto } from '../application/dto/create.car.dto';
import { Car } from '../domain/entities/car.entity';

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
    const cars = await query.getMany();
    return cars;
  }

  async deleteCar(id: string): Promise<void> {
    const result = await this.delete(id);
  }
}

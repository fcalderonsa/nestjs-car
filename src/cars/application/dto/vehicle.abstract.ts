import { Car } from 'src/cars/domain/entities/car.entity';

export abstract class Vehicle extends Car {
  abstract horsePower: number;

  abstract hybrid: boolean;
}

import { IsNotEmpty, IsUUID } from 'class-validator';
import { Owner } from '../../domain/entities/owner.entity';
import { Car } from 'src/cars/domain/entities/car.entity';

export class CarOwnerDTO {
  @IsNotEmpty()
  owner: Owner;
  @IsNotEmpty()
  car: Car;
}

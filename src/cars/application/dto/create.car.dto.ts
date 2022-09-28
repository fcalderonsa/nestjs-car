import { IsNotEmpty } from 'class-validator';
import { VehicleType } from '../enum/type-vehicle';

export class CarCreateDto {
  @IsNotEmpty({ message: 'Need a brand for the car' })
  brand: string;
  @IsNotEmpty({ message: 'Need a model for the car' })
  model: string;
  @IsNotEmpty({ message: 'Need a year for the car' })
  year: number;
  @IsNotEmpty({ message: 'Need a vehicletype for the car' })
  type: VehicleType;
}

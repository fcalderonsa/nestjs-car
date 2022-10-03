import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
import { VehicleType } from '../enum/type-vehicle';
import { Brand } from '../../../brand/domain/entities/brand.entity';

export class CarCreateDto {
  @IsNotEmpty({ message: 'Need a brand for the car' })
  brand: Brand;
  @IsNotEmpty({ message: 'Need a model for the car' })
  @IsString()
  model: string;
  @IsNotEmpty({ message: 'Need a year for the car' })
  @IsNumber()
  @MaxLength(4)
  @MinLength(4)
  year: number;
  @IsNotEmpty({ message: 'Need a vehicle type for the car' })
  typeVehicle: VehicleType;
}

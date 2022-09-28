import { IsOptional } from 'class-validator';
import { VehicleType } from '../enum/type-vehicle';

export class CarCreateDto {
  @IsOptional()
  model: string;
  @IsOptional()
  year: number;
  @IsOptional()
  type: VehicleType;
}

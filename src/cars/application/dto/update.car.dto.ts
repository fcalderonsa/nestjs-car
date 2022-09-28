import { IsNotEmpty, IsOptional } from 'class-validator';
import { Brand } from 'src/brand/domain/entities/brand.entity';
import { VehicleType } from '../enum/type-vehicle';
export class UpdateCarDto {
  @IsNotEmpty()
  id: string;
  @IsOptional()
  brand: Brand;
  @IsOptional()
  model: string;
  @IsOptional()
  year: number;
  @IsOptional()
  typeVehicle: VehicleType;
}

import { IsOptional } from 'class-validator';
import { Brand } from 'src/brand/domain/entities/brand.entity';
import { VehicleType } from '../enum/type-vehicle';
export class UpdateCarDto {
  @IsOptional()
  brand: Brand;
  @IsOptional()
  year: number;
  @IsOptional()
  type: VehicleType;
}

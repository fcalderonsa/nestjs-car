import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { Brand } from 'src/brand/domain/entities/brand.entity';
import { VehicleType } from '../enum/type-vehicle';
export class UpdateCarDto {
  @IsNotEmpty()
  @IsString()
  id: string;
  @IsOptional()
  brand: Brand;
  @IsOptional()
  @IsString()
  model: string;
  @IsOptional()
  @IsNumber()
  @MaxLength(4)
  @MinLength(4)
  year: number;
  @IsOptional()
  typeVehicle: VehicleType;
}

import { IsOptional, IsString } from 'class-validator';
export class UpdateBrandDto {
  @IsOptional()
  @IsString()
  name: string;
  @IsString()
  @IsOptional()
  country: string;
}

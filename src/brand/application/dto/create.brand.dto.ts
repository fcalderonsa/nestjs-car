import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBrandDto {
  @IsNotEmpty({ message: 'Need a name for the brand' })
  @IsString()
  name: string;
  @IsNotEmpty({ message: 'Need a country for the brand' })
  @IsString()
  country: string;
}

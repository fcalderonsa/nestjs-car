import { IsNotEmpty } from 'class-validator';

export class CreateBrandDto {
  @IsNotEmpty({ message: 'Need a name for the brand' })
  name: string;
  @IsNotEmpty({ message: 'Need a country for the brand' })
  country: string;
}

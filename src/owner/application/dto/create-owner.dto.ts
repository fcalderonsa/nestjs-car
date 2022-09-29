import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateOwnerDto {
  @IsNotEmpty({ message: 'Need a name for the owner' })
  name: string;
  @IsNotEmpty({ message: 'Need a name for the owner' })
  lastName: string;
  @IsPositive({ message: 'Cant be negative' })
  @IsNumber()
  @IsNotEmpty({ message: 'Need a name for the owner' })
  age: number;
  @IsNotEmpty({ message: 'Need a name for the owner' })
  city: string;
}

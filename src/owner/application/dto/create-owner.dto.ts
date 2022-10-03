import { IsBoolean, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateOwnerDto {
  @IsNotEmpty({ message: 'Need a name for the owner' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Need a name for the owner' })
  @IsString()
  lastName: string;

  @IsPositive({ message: 'Cant be negative' })
  @IsNumber()
  @IsNotEmpty({ message: 'Need a name for the owner' })
  age: number;

  @IsNotEmpty({ message: 'Need a name for the owner' })
  @IsString()
  city: string;

  @IsNotEmpty({ message: 'Need a username for the owner' })
  @IsString()
  username: string;

  @IsNotEmpty({ message: 'Need a password for the owner' })
  @MinLength(6)
  @MaxLength(32)
  pass: string;

  @IsBoolean()
  enable: boolean;
}

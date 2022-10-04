import { IsNotEmpty, IsUUID } from 'class-validator';

export class CarOwnerDTO {
  @IsNotEmpty()
  @IsUUID()
  idOwner: string;

  @IsNotEmpty()
  @IsUUID()
  idCar: string;
}

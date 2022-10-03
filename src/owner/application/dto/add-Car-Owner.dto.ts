import { IsUUID } from 'class-validator';

export class CarOwnerDTO {
  @IsUUID()
  ownerId: string;
  @IsUUID()
  carId: string;
}

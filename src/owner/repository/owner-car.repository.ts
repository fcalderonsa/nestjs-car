import { EntityRepository, Repository } from 'typeorm';
import { CarOwnerDTO } from '../application/dto/add-Car-Owner.dto';
import { OwnerCar } from '../domain/entities/owner-car.entity';
import { Logger } from '@nestjs/common';

@EntityRepository(OwnerCar)
export class OwnerCarRespository extends Repository<OwnerCar> {
  private readonly log = new Logger();

  async addCar(addOwnerCarDto: CarOwnerDTO) {
    const { idOwner, idCar } = addOwnerCarDto;
    const ownerCar = this.create({ idOwner, idCar });
    await this.save(ownerCar);
    return ownerCar;
  }
}

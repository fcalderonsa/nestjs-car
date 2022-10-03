import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOwnerDto } from '../../application/dto/create-owner.dto';
import { UpdateOwnerDto } from '../../application/dto/update-owner.dto';
import { OwnerRespository } from '../../repository/owner.repository';
import { Owner } from '../entities/owner.entity';

@Injectable()
export class OwnerService {
  private readonly log = new Logger();
  constructor(
    @InjectRepository(OwnerRespository)
    private ownerRespository: OwnerRespository,
  ) {}
  create(createOwnerDto: CreateOwnerDto) {
    return this.ownerRespository.createOwner(createOwnerDto);
  }

  async findAll(): Promise<Owner[]> {
    const owners = this.ownerRespository.getAllOwners();
    this.log.debug(owners);
    return owners;
  }

  findOne(name: string) {
    return this.ownerRespository.findOwner(name);
  }

  update(updateOwnerDto: UpdateOwnerDto) {
    return this.ownerRespository.updateOwner(updateOwnerDto);
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}

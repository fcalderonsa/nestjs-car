import { createQueryBuilder, EntityRepository, Repository } from 'typeorm';
import { Owner } from '../domain/entities/owner.entity';
import { CreateOwnerDto } from '../application/dto/create-owner.dto';
import { NotFoundException } from '@nestjs/common';
import { UpdateOwnerDto } from '../application/dto/update-owner.dto';

@EntityRepository(Owner)
export class OwnerRespository extends Repository<Owner> {
  async createOwner(createOwnerDto: CreateOwnerDto): Promise<Owner> {
    const { name, lastName, age, city, username, pass } = createOwnerDto;
    const owners = this.create({
      name,
      lastName,
      age,
      city,
      username,
      pass,
    });
    await this.save(owners);
    return owners;
  }
  async findOwner(name: string): Promise<Owner> {
    const query = this.createQueryBuilder('owner');
    query.where('owner.name = :name', { name });
    const owner = await query.getOne();
    if (!owner) {
      throw new NotFoundException('Owner not found');
    }
    return owner;
  }
  async deleteOwner(id: string): Promise<void> {
    await this.delete(id);
  }
  async updateOwner(updateOwnerDto: UpdateOwnerDto) {
    const { name, lastName, age, city } = updateOwnerDto;
    const ownerToUpdate = await this.findOne(name);
    ownerToUpdate.name = name;
    ownerToUpdate.lastName = lastName;
    ownerToUpdate.age = age;
    ownerToUpdate.city = city;
  }

  async getAllOwners(): Promise<Owner[]> {
    const query = this.createQueryBuilder('Owner');
    const owners = await query.getMany();
    if (!owners) {
      throw new NotFoundException('Owners not found');
    }
    return owners;
  }
}

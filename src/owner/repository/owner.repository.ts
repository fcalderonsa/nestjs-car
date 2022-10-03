import { createQueryBuilder, EntityRepository, Repository } from 'typeorm';
import { Owner } from '../domain/entities/owner.entity';
import { CreateOwnerDto } from '../application/dto/create-owner.dto';
import { Logger, NotFoundException } from '@nestjs/common';
import { UpdateOwnerDto } from '../application/dto/update-owner.dto';
import { CarOwnerDTO } from '../application/dto/add-Car-Owner.dto';
import { Car } from 'src/cars/domain/entities/car.entity';

@EntityRepository(Owner)
export class OwnerRespository extends Repository<Owner> {
  private readonly log = new Logger();

  async createOwner(createOwnerDto: CreateOwnerDto): Promise<Owner> {
    const { name, lastName, age, city, username, pass, enable } = createOwnerDto;
    const owners = this.create({
      name,
      lastName,
      age,
      city,
      username,
      pass,
      enable,
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
    const ownerToDelete = this.findOwnerById(id);
    await this.delete((await ownerToDelete).id);
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

  async findOwnerById(id: string): Promise<Owner> {
    const query = this.createQueryBuilder('owner');
    query.where('owner.id = :id', { id });
    const owner = await query.getOne();
    if (!owner) {
      throw new NotFoundException('Owner not found or not exist');
    }
    return owner;
  }

async linkCar(linkCarDto: CarOwnerDTO) {
  const newOwnerCarDao = this.create(linkCarDto);
  newOwnerCarDao.cars = linkCarDto.car.map((Car) => {idCar car, idOwner: newOwnerCarDao.id });
  const newOwnerCars = await this.save(newOwnerCarDao);
  return newOwnerCars;

}


}

import { Repository, EntityRepository } from 'typeorm';
import { CreateBrandDto } from '../application/dto/create.brand.dto';
import { Brand } from '../domain/entities/brand.entity';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(Brand)
export class BrandRepository extends Repository<Brand> {
  async createBrand(createBranddto: CreateBrandDto): Promise<Brand> {
    const { name, country } = createBranddto;
    const brands = this.create({
      name,
      country,
    });
    await this.save(brands);
    return brands;
  }
  async findBrand(brand: string): Promise<Brand> {
    const query = this.createQueryBuilder('brand');
    query.where('brand.name = :brand', { brand });
    const brands = query.getOne();
    if (!brands) {
      throw new NotFoundException('Brand not found');
    }
    return brands;
  }
  async getBrands(): Promise<Brand[]> {
    const query = this.createQueryBuilder('brands');
    const brands = await query.getMany();
    if (!brands) {
      throw new NotFoundException('Brands not found');
    }
    return brands;
  }
}

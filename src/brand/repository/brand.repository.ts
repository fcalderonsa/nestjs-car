import { Repository, EntityRepository } from 'typeorm';
import { CreateBrandDto } from '../application/dto/create.brand.dto';
import { UpdateBrandDto } from '../application/dto/update.brand.dto';
import { Brand } from '../domain/entities/brand.entity';

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
    query.where('brand = .brand', { brand });
    const brands = query.getOneOrFail();
    return brands;
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandRepository } from '../../repository/brand.repository';
import { CreateBrandDto } from '../../application/dto/create.brand.dto';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandService {
  private readonly log = new Logger();
  constructor(
    @InjectRepository(BrandRepository)
    private brandrepository: BrandRepository,
  ) {}

  async createBrand(createBranddto: CreateBrandDto): Promise<Brand> {
    const brand = this.brandrepository.createBrand(createBranddto);
    this.log.debug(createBranddto);
    return brand;
  }
  async getAllBrands(): Promise<Brand[]> {
    const brands = this.brandrepository.getBrands();
    return brands;
  }
}

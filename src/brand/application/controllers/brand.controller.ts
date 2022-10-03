import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateBrandDto } from '../dto/create.brand.dto';
import { BrandService } from '../../domain/services/brand.service';

@Controller('brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}
  @Post('/create')
  createBrand(@Body() createBranddto: CreateBrandDto) {
    return this.brandService.createBrand(createBranddto);
  }
  @Get()
  getBrands() {
    return this.brandService.getAllBrands();
  }
}

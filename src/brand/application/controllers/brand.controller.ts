import { Body, Controller, Post } from '@nestjs/common';
import { CreateBrandDto } from '../dto/create.brand.dto';
import { BrandService } from '../../domain/services/brand.service';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}
  @Post('/create')
  createBrand(@Body() createBranddto: CreateBrandDto) {
    return this.brandService.createBrand(createBranddto);
  }
}

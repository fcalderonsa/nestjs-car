import { Module } from '@nestjs/common';
import { BrandController } from './application/controllers/brand.controller';
import { BrandService } from './domain/services/brand.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { BrandRepository } from './repository/brand.repository';

@Module({
  controllers: [BrandController],
  providers: [BrandService],
  imports: [TypeOrmModule.forFeature([BrandRepository])],
})
export class BrandModule {}

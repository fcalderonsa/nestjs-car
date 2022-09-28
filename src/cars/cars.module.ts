import { Module } from '@nestjs/common';
import { CarsController } from './application/controllers/cars.controller';
import { CarService } from './domain/services/car.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { CarRepository } from './repository/cars.repository';

@Module({
  controllers: [CarsController],
  providers: [CarService],
  imports: [TypeOrmModule.forFeature([CarRepository])],
})
export class CarsModule {}

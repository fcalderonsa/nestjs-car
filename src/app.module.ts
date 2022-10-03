import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Car } from './cars/domain/entities/car.entity';
import { BrandModule } from './brand/brand.module';
import { Brand } from './brand/domain/entities/brand.entity';
import { OwnerModule } from './owner/owner.module';
import { Owner } from './owner/domain/entities/owner.entity';
import { OwnerCar } from './owner/domain/entities/owner-car.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgrespw',
      database: 'practice',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Car, Brand, Owner, OwnerCar],
    }),
    BrandModule,
    CarsModule,
    OwnerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

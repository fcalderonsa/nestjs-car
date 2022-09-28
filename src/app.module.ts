import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Car } from './cars/domain/entities/car.entity';
import { BrandModule } from './brand/brand.module';
import { Brand } from './brand/domain/entities/brand.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 49154,
      username: 'postgres',
      password: 'postgrespw',
      database: 'practice',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Car, Brand],
    }),
    BrandModule,
    CarsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

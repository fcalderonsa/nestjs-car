import { Module } from '@nestjs/common';
import { OwnerService } from './domain/services/owner.service';
import { OwnerController } from './application/controllers/owner.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { OwnerRespository } from './repository/owner.repository';
import { OwnerCarRespository } from './repository/owner-car.repository';

@Module({
  controllers: [OwnerController],
  providers: [OwnerService],
  imports: [TypeOrmModule.forFeature([OwnerRespository, OwnerCarRespository])],
})
export class OwnerModule {}

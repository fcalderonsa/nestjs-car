import { Module } from '@nestjs/common';
import { OwnerService } from './domain/entities/services/owner.service';
import { OwnerController } from './application/controllers/owner.controller';

@Module({
  controllers: [OwnerController],
  providers: [OwnerService]
})
export class OwnerModule {}

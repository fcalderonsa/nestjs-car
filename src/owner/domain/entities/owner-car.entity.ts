import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Owner } from './owner.entity';
import { Car } from '../../../cars/domain/entities/car.entity';

@Entity()
export class OwnerCar {
  @PrimaryColumn({ name: 'idOwner' })
  idOwner: string;
  @PrimaryColumn({ name: 'idCar' })
  idCar: string;

  @ManyToOne(() => Owner, (owner) => owner.cars, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn([{ name: 'idOwner', referencedColumnName: 'id' }])
  owners: Owner[];

  @ManyToOne(() => Car, (car) => car.owners, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn([{ name: 'idCar', referencedColumnName: 'id' }])
  cars: Car[];
}

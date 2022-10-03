import {
  ChildEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';
import { Brand } from 'src/brand/domain/entities/brand.entity';
import { VehicleType } from 'src/cars/application/enum/type-vehicle';
import { type } from 'os';
import { Owner } from '../../../owner/domain/entities/owner.entity';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((type) => Brand)
  @JoinColumn({ name: 'brand_id', referencedColumnName: 'id' })
  brand: Brand;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  typeVehicle: VehicleType;

  @ManyToMany((type) => Owner)
  owners: Owner[];
}

@ChildEntity()
export class HyperCar extends Car {
  @Column({ nullable: true })
  horsePower: number;

  @Column({ nullable: true })
  hybrid: boolean;
}

import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Brand } from 'src/brand/domain/entities/brand.entity';
import { VehicleType } from 'src/cars/application/enum/type-vehicle';

@Entity()
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
}

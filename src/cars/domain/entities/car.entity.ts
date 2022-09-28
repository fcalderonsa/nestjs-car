import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Brand } from 'src/brand/domain/entities/brand.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  brand: string;

  @ManyToOne((type) => Car)
  @JoinColumn({ name: 'brand_id', referencedColumnName: 'id' })
  car: Car;

  @Column()
  model: string;

  @Column()
  year: number;
}

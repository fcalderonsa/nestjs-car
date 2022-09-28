import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from 'src/cars/domain/entities/car.entity';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Car, (car) => car.brand)
  cars: Car[];

  @Column()
  country: string;
}

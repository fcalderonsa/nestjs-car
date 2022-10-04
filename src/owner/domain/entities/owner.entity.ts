import { Car } from 'src/cars/domain/entities/car.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne } from 'typeorm';

@Entity()
export class Owner {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  city: string;

  @Column()
  enable: boolean;

  @Column()
  username: string;

  @Column()
  pass: string;

  @ManyToOne(() => Car, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinTable({
    name: 'OwnerCar',
    joinColumn: { name: 'idOwner', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'idCar', referencedColumnName: 'id' },
  })
  cars: Car[];
}

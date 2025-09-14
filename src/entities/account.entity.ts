import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn() // this generated a primary key for us
  id: number;

  @Column({ type: 'varchar', length: 255 }) //create a column name
  name: string;

  @Column({ type: 'varchar', length: 255 }) //create a column email
  email: string;

  @Column({ type: 'varchar', length: 30 }) //create a column password
  password: string;
}

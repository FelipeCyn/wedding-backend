import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name?: string;

  @Column()
  date?: number;

  @Column()
  time?: number;

  @Column()
  message?: string;

  @Column()
  guestId?: string;
}

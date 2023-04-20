import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Wedding {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date?: Date;

  @Column()
  time?: Date;

  @Column()
  address?: string;

  @Column()
  mealResponses?: boolean;

  @Column()
  userId?: number;

  @Column()
  rsvps?: boolean;

  @Column()
  trial?: boolean;

  @Column()
  status?: boolean;
}

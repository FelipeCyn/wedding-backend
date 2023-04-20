import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class MealOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name?: string;

  @Column()
  number?: number;

  @Column()
  counter?: number;

  @Column()
  weddingId?: string;
}

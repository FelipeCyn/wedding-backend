import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Guest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName?: string;

  @Column()
  lastName?: string;

  @Column()
  phoneNumber?: string;

  @Column()
  rsvp?: boolean;

  @Column()
  guests?: number;

  @Column()
  weddingId?: string;

  @Column()
  mealOptionId?: string;
}

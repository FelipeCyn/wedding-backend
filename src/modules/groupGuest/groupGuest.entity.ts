import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class GroupGuest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  guestId?: string;

  @Column()
  groupId?: string;
}

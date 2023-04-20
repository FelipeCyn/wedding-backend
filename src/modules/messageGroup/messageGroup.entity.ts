import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class MessageGroup {
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
  groupId?: string;

  @Column()
  scheduled?: boolean;

  @Column()
  sent?: boolean;
}

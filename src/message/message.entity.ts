import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'Messages' })
export default class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  text: string;

  @CreateDateColumn()
  createdAt: Date;
}

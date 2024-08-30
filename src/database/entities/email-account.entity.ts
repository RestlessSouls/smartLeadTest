import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EmailAccount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fromName: string;

  @Column()
  fromEmail: string;

  @Column()
  userName: string;

  @Column()
  password: string;

  @Column()
  smtpHost: string;

  @Column()
  smtpPort: number;

  @Column()
  imapHost: string;

  @Column()
  imapPort: number;

  @Column()
  messagePerDay: number;

  @Column()
  minimumTimeGap: number;
}


import {
  AllowNull,
  AutoIncrement,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Recruiter } from 'src/recruiter/entities/recruiter.entity';

@Table
export class Job extends Model {
  @PrimaryKey
  @Unique
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(false)
  @Column
  description: string;

  @AllowNull(false)
  @Column
  skills: string;

  @ForeignKey(() => Recruiter)
  @AllowNull(false)
  @Column
  recruiterId: number;
}

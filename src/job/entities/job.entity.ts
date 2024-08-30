import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Application } from 'src/application/entities/application.entity';
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

  @HasMany(() => Application, {
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT',
  })
  applications: Application[];

  @BelongsTo(() => Recruiter)
  recruiter: Recruiter;
}

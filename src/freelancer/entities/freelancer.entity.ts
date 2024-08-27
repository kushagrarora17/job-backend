import {
  AllowNull,
  AutoIncrement,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Application } from 'src/application/entities/application.entity';

@Table
export class Freelancer extends Model {
  @PrimaryKey
  @Unique
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Unique
  @Column
  email: string;

  @AllowNull(true)
  @Column
  skills: string;

  @AllowNull(true)
  @Column
  github: string;

  @HasMany(() => Application)
  applications: Application[];
}

import {
  AllowNull,
  AutoIncrement,
  Column,
  PrimaryKey,
  Unique,
} from 'sequelize-typescript';

export class Recruiter {
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

  @AllowNull(false)
  @Column
  company: string;
}

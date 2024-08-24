import {
  AllowNull,
  AutoIncrement,
  BeforeValidate,
  Column,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Freelancer } from 'src/freelancer/entities/freelancer.entity';
import { Job } from 'src/job/entities/job.entity';

@Table
export class Application extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => Job)
  @AllowNull(false)
  @Column
  jobId: number;

  @ForeignKey(() => Freelancer)
  @AllowNull(false)
  @Column
  freelancerId: number;

  @Default('APPLIED')
  @Column
  status: 'APPLIED' | 'SUBMITTED' | 'REJECTED';

  @Default(false)
  @Column
  isArchived: boolean;

  @Unique('unique_freelancer_job')
  @AllowNull(false)
  @Column
  freelancerJobComposite: string;

  // Use before validation hook to set the composite value
  @BeforeValidate
  static setCompositeKey(instance: Application) {
    instance.freelancerJobComposite = `${instance.freelancerId}-${instance.jobId}`;
  }
}

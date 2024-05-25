import CocomoEntity from '@entities/cocomo/cocomo.entity';
import FunctionPointEntity from '@entities/functionPoint/functionPoint.entity';
import GanttEntity from '@entities/gantt/gant.entity';
import TaskEntity from '@entities/task/task.entity';
import TeamMemberEntity from '@entities/teamMember/teamMember.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export default class ProjectEntity {
  @PrimaryGeneratedColumn()
  projectID: number;

  @Column({ type: 'text' })
  projectName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => FunctionPointEntity)
  @JoinColumn({
    name: 'functionPointFID',
    referencedColumnName: 'functionPointID',
  })
  functionPoint: FunctionPointEntity;

  @OneToOne(() => CocomoEntity)
  @JoinColumn({
    name: 'cocomoFID',
    referencedColumnName: 'cocomoID',
  })
  cocomo: CocomoEntity;

  @OneToMany(
    () => TeamMemberEntity,
    (teamMemberEntity) => teamMemberEntity.project,
  )
  teamMembers: TeamMemberEntity[];

  @OneToMany(() => GanttEntity, (ganttEntity) => ganttEntity.project)
  gantt: GanttEntity;
}

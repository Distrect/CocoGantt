import ProjectEntity from '@entities/project/project.entity';
import TaskEntity from '@entities/task/task.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export default class GanttEntity {
  @PrimaryGeneratedColumn()
  ganttID: number;

  @OneToMany(() => TaskEntity, (taskEntity) => taskEntity.gantt)
  tasks: TaskEntity[];

  @ManyToOne(() => ProjectEntity, (projectEntity) => projectEntity.gantt)
  project: ProjectEntity;
}

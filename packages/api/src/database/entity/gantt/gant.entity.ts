import ProjectEntity from '@entities/project/project.entity';
import TaskEntity from '@entities/task/task.entity';
import { Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class GanttEntity {
  @PrimaryGeneratedColumn()
  ganttID: number;

  @OneToMany(() => TaskEntity, (taskEntity) => taskEntity.gantt)
  tasks: TaskEntity[];

  @OneToOne(() => ProjectEntity, (projectEntity) => projectEntity.gantt)
  project: ProjectEntity;
}

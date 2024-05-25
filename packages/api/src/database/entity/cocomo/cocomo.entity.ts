import ProjectEntity from '@entities/project/project.entity';
import { CocomoMode } from 'shared';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity()
export default class CocomoEntity {
  @PrimaryGeneratedColumn()
  cocomoID: number;

  @Column({ type: 'simple-enum', enum: CocomoMode })
  mode: CocomoMode;

  @Column({ type: 'int' })
  kloc: number;

  @OneToOne(() => ProjectEntity)
  project: ProjectEntity;
}

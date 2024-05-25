import ProjectEntity from '@entities/project/project.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export default class TeamMemberEntity {
  @PrimaryGeneratedColumn()
  teamMemberID: number;

  @Column({ type: 'text' })
  memeberName: string;

  @Column({ type: 'text' })
  title: string;

  @ManyToOne(() => ProjectEntity, (projectEntity) => projectEntity.teamMembers)
  project: ProjectEntity;
}

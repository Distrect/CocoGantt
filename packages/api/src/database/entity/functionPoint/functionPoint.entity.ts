import ProjectEntity from '@entities/project/project.entity';
import { ICAF, IFunctionPointAttributes } from 'shared';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity()
export default class FunctionPointEntity {
  @PrimaryGeneratedColumn()
  functionPointID: number;

  @Column({ type: 'simple-json' })
  attributes: IFunctionPointAttributes;

  @Column({ type: 'simple-json' })
  caf: ICAF;

  @OneToOne(() => ProjectEntity)
  project: ProjectEntity;

  public toJSON() {
    return {
      functionPointID: this.functionPointID,
      attributes: this.attributes,
      caf: this.caf,
    };
  }
}

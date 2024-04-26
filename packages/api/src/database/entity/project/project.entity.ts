import { Project } from '@prisma/client';

export default class ProjectEntity implements Project {
  public projectID: number;
  public projectName: string;
  public updatedAt: Date;
  public createdAt: Date;
}

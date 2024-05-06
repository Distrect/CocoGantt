import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { IProjectEntity } from 'src/database/entity/project/project.entity.interface';
import PrismaConnectorService from 'src/database/prismaConnector/prisma.connector.service';
import { RecordNotFoundError } from 'src/shared/errors';

@Injectable()
export default class ProjectDAO {
  constructor(private prisma: PrismaConnectorService) {}

  public async getProject(args: Prisma.ProjectFindUniqueArgs) {
    const projectRecord = await this.prisma.project.findUnique(args);

    if (projectRecord === null)
      throw new RecordNotFoundError('Record Not Found');

    return projectRecord;
  }

  public async createProject(data: Prisma.ProjectCreateInput) {
    const newProjectRecord = await this.prisma.project.create({ data });

    return newProjectRecord;
  }

  public async updateProject(
    projectID: IProjectEntity['projectID'],
    data: Prisma.ProjectUpdateInput,
  ) {
    const updatedRecord = await this.prisma.project.update({
      data,
      where: { projectID },
    });

    if (updatedRecord === null)
      throw new RecordNotFoundError('Record Not Found');

    return updatedRecord;
  }

  public async deleteProject(projectID: IProjectEntity['projectID']) {
    const deletedRecord = await this.prisma.project.delete({
      where: { projectID },
    });

    if (deletedRecord === null)
      throw new RecordNotFoundError('Record Not Found');
  }
}

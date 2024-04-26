import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import PrismaConnectorService from 'src/database/prismaConnector/prisma.connector.service';

@Injectable()
export default class ProjectDAO {
  constructor(private prisma: PrismaConnectorService) {}

  public async createProject(data: Prisma.ProjectCreateInput) {
    const newProject = await this.prisma.project.create({ data });

    return newProject;
  }
}

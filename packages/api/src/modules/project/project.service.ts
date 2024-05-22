import { Injectable } from '@nestjs/common';
import ProjectDAO from '@entities/project/project.dao';
import { CreateFunctionPointData } from './project.module.interface';
import { Prisma } from '@prisma/client';

@Injectable()
export default class ProjectService {
  constructor(private projectDAO: ProjectDAO) {}

  public async createProject(data: CreateFunctionPointData) {
    const createdFunctionPointEntity =
      await this.projectDAO.createProject(data);

    return createdFunctionPointEntity;
  }

  public async deleteProject(id: number): Promise<void> {
    await this.projectDAO.deleteProject(id);
  }

  public async updateProject(
    id: number,
    updateData: Prisma.ProjectUpdateInput,
  ) {
    const updatedProject = await this.projectDAO.updateProject(id, updateData);

    return updatedProject;
  }

  public async getProject(args: Prisma.ProjectFindUniqueArgs) {
    const project = await this.projectDAO.getProject(args);

    return project;
  }
}

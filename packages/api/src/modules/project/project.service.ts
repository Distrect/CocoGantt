import { Injectable } from '@nestjs/common';
import ProjectDAO from '@entities/project/project.dao';
import { CreateFunctionPointData } from './project.module.interface';

@Injectable()
export default class ProjectService {
  constructor(private projectDAO: ProjectDAO) {}

  public async createProject(data: CreateFunctionPointData) {
    const createdFunctionPointEntity =
      await this.projectDAO.createProject(data);

    return createdFunctionPointEntity;
  }

  public async deleteProject() {}
}

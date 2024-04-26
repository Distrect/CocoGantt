import { Injectable } from '@nestjs/common';
import ProjectDAO from 'src/database/entity/project/project.dao';

@Injectable()
export default class ProjectService {
  constructor(private projectDAO: ProjectDAO) {}

  public async createProject(){}
}

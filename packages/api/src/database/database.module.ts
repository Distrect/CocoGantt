import { Module } from '@nestjs/common';
import FunctionpointEntityModule from 'src/database/entity/functionPoint/functionpoint.entity.module';
import ProjectEntityModule from 'src/database/entity/project/project.entity.module';
import TaskEntityModule from 'src/database/entity/task/task.entity.module';

const entityModules = [
  ProjectEntityModule,
  FunctionpointEntityModule,
  TaskEntityModule,
];

@Module({
  imports: entityModules,
  exports: entityModules,
})
export class DatabaseModule {}

import { Module } from '@nestjs/common';
import ProjectDAO from 'src/database/entity/project/project.dao';
import { PrismaConnectorModule } from 'src/database/prismaConnector/prisma.connector.module';

@Module({
  imports: [PrismaConnectorModule],
  providers: [ProjectDAO],
  exports: [ProjectDAO],
})
export default class ProjectEntityModule {}

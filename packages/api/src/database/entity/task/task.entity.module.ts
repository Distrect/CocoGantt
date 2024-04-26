import { TaskDAO } from 'src/database/entity/task/task.dao';
import { PrismaConnectorModule } from './../../prismaConnector/prisma.connector.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaConnectorModule],
  providers: [TaskDAO],
  exports: [TaskDAO],
})
export default class TaskEntityModule {}

import { Module } from '@nestjs/common';
import { FunctionPointDao } from 'src/database/entity/functionPoint/functionPoint.dao';
import { PrismaConnectorModule } from 'src/database/prismaConnector/prisma.connector.module';

@Module({
  imports: [PrismaConnectorModule],
  providers: [FunctionPointDao],
  exports: [FunctionPointDao],
})
export default class FunctionpointEntityModule {}

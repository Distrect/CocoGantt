import { Module } from '@nestjs/common';
import PrismaConnectorService from 'src/database/prismaConnector/prisma.connector.service';

@Module({
  providers: [PrismaConnectorService],
  exports: [PrismaConnectorService],
})
export class PrismaConnectorModule {}

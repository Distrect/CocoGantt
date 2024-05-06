import { Module } from '@nestjs/common';
import { PrismaConnectorModule } from 'src/database/prismaConnector/prisma.connector.module';

@Module({
  imports: [PrismaConnectorModule],
  providers: [],
})
export default class COCOMOEntityModule {}

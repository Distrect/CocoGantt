import { Module } from '@nestjs/common';
import { CAFDAO } from 'src/database/entity/CAF/caf.dao';
import { PrismaConnectorModule } from 'src/database/prismaConnector/prisma.connector.module';

@Module({
  imports: [PrismaConnectorModule],
  providers: [CAFDAO],
  exports: [CAFDAO],
})
export class CAFEntityModule {}

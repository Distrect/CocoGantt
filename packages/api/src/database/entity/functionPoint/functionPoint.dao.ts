import { Injectable } from '@nestjs/common';
import PrismaConnectorService from 'src/database/prismaConnector/prisma.connector.service';

@Injectable()
export class FunctionPointDao {
  constructor(private prisma: PrismaConnectorService) {}
}

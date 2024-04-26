import { Injectable } from '@nestjs/common';
import PrismaConnectorService from 'src/database/prismaConnector/prisma.connector.service';

@Injectable()
export class TaskDAO {
  constructor(private prisma: PrismaConnectorService) {}
}

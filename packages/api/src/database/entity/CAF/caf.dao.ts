import { Injectable } from '@nestjs/common';
import PrismaConnectorService from 'src/database/prismaConnector/prisma.connector.service';

@Injectable()
export class CAFDAO {
  constructor(private prisma: PrismaConnectorService) {}
}

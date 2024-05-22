import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export default class PrismaConnectorService
  extends PrismaClient
  implements OnModuleInit
{
  public async onModuleInit(): Promise<void> {
    await this.$connect();
  }
}

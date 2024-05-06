import { UpdateRecordData } from './cocomo.entity.interface';
import { Injectable } from '@nestjs/common';
import { Functionpoint, Prisma, PrismaClient } from '@prisma/client';
import {
  BaseCocomo,
  ConvertMode,
  ConvertOutput,
  ICAF,
  ICocomoEntity,
  ReturnConverter,
} from 'shared';
import PrismaConnectorService from 'src/database/prismaConnector/prisma.connector.service';
import { RecordNotFoundError, RecordOperationError } from 'src/shared/errors';

type shortCut<T extends ConvertMode> = ReturnConverter<
  T,
  BaseCocomo,
  ICocomoEntity
>;

@Injectable()
export default class COCOMODao {
  private model: Prisma.CocomoDelegate;

  constructor(prisma: PrismaConnectorService) {
    this.model = prisma.cocomo;
  }

  public cocomoConverter<T extends ConvertMode>(
    mode: T,
    record: Partial<ConvertOutput<T, ICocomoEntity, BaseCocomo>>,
  ): shortCut<T> {
    if (mode === 'toJSON') {
      (record as ICocomoEntity).cafJson = JSON.parse(record.cafJson as string);

      return record as ReturnConverter<T>;
    }

    (record as BaseCocomo).cafJson = JSON.stringify(record.cafJson as ICAF);

    return record as ReturnConverter<T>;
  }

  public async getCocomoRecord(cocomoID: BaseCocomo['cocomoID']) {
    const cocomoRecord = await this.model.findUnique({ where: { cocomoID } });

    if (cocomoRecord === null)
      throw new RecordNotFoundError(`Record with id ${cocomoID}`);

    return cocomoRecord;
  }

  public async createCocomoRecord(data: ICocomoEntity) {
    const convertedData = this.cocomoConverter('toString', data);

    const newCocomoRecord = await this.model.create({ data: convertedData });

    return this.cocomoConverter('toJSON', newCocomoRecord);
  }

  public async deleteCocomoRecord(cocomoID: BaseCocomo['cocomoID']) {
    const deletedRecord = await this.model.delete({ where: { cocomoID } });

    return;
  }

  public async updateCocomoRecord(data: UpdateRecordData) {
    const { cocomoID, ...rest } = this.cocomoConverter('toString', data);

    const updatedCocomoRecord = await this.model.update({
      where: { cocomoID },
      data: rest,
    });

    if (updatedCocomoRecord === null)
      throw new RecordNotFoundError(`Record with id ${cocomoID}`);

    return this.cocomoConverter('toJSON', updatedCocomoRecord);
  }
}
